import {TriggerComparison, PerennialSDK, SupportedMarket} from '@perennial/sdk'
import {arbitrumSepolia} from 'viem/chains'
import {formatPrice, getTokenDisplayName} from './utils'
import {CONTRACT_ADDRESSES} from './contracts'
import {WalletClient, parseEther} from 'viem'
import type {MarketInfo, OpenOrder, PortfolioData, TradeParams, ClosePositionParams} from '@/types'

const sdkConfig = {
  chainId: arbitrumSepolia.id,
  rpcUrl: "https://arbitrum-sepolia.infura.io/v3/82de4c56f4364dd899635d8ebbc349cc",
  graphUrl: "https://api.studio.thegraph.com/query/119174/perennial-gig/version/latest",
  pythUrl: "https://hermes.pyth.network",
  marketFactoryAddress: CONTRACT_ADDRESSES.marketFactory,
  multiInvokerAddress: CONTRACT_ADDRESSES.multiInvoker,
  usdcAddress: CONTRACT_ADDRESSES.usdc,
}

export async function approveUSDC(
  walletClient: WalletClient,
  amount: bigint
): Promise<string> {
  const userAddress = walletClient.account?.address
  if (!userAddress) throw new Error('No wallet address')

  const spenderAddress = '0x6e710fDDE613609C5044813db674D4da35a593FB'

  return await walletClient.writeContract({
    address: "0xEd64A15A6223588794A976d344990001a065F3f1",
    abi: [
      {
        name: 'approve',
        type: 'function',
        stateMutability: 'nonpayable',
        inputs: [
          {name: 'spender', type: 'address'},
          {name: 'amount', type: 'uint256'}
        ],
        outputs: [{name: '', type: 'bool'}]
      }
    ] as const,
    functionName: 'approve',
    args: [spenderAddress, amount],
    chain: undefined,
    account: userAddress
  })
}

export async function openPosition(
  walletClient: WalletClient,
  params: TradeParams
): Promise<string> {
  try {
    const userAddress = walletClient.account?.address
    if (!userAddress) throw new Error('No wallet address')

    const sdk = new PerennialSDK({
      ...sdkConfig,
      walletClient: walletClient as any
    })

    const amount = parseEther(params.amount)
    const limitPrice = params.limitPrice ? parseEther(params.limitPrice) : parseEther("0")

    await approveUSDC(walletClient, amount)

    return await sdk.markets.write.limitOrder({
      triggerComparison: params.side == "short" ? TriggerComparison.lte : TriggerComparison.gte,
      marketAddress: params.marketAddress as `0x${string}`,
      address: userAddress,
      side: params.side as any,
      limitPrice: limitPrice,
      delta: amount
    })
  } catch (error) {
    console.error('Error opening position', error)
    throw error
  }
}

export async function closePosition(
  walletClient: WalletClient,
  params: ClosePositionParams
): Promise<string> {
  try {
    const userAddress = walletClient.account?.address
    if (!userAddress) throw new Error('No wallet address')

    const sdk = new PerennialSDK({
      ...sdkConfig,
      walletClient: walletClient as any
    })

    const amount = params.amount ? parseEther(params.amount) : parseEther("1")
    const limitPrice = params.limitPrice ? parseEther(params.limitPrice) : parseEther("0")

    return await sdk.markets.write.limitOrder({
      triggerComparison: params.side == "short" ? TriggerComparison.gte : TriggerComparison.lte,
      marketAddress: params.marketAddress as `0x${string}`,
      address: userAddress,
      side: params.side as any,
      limitPrice: limitPrice,
      delta: -amount
    })
  } catch (error) {
    console.error('Error closing position', error)
    throw error
  }
}

export async function fetchMarkets(): Promise<MarketInfo[]> {
  try {
    const sdk = new PerennialSDK(sdkConfig)
    const marketSnapshots = await sdk.markets.read.marketSnapshots({})
    
    const markets: MarketInfo[] = []
    const allowedMarkets = ['btc', 'eth']
    
    if (marketSnapshots.market) {
      for (const [marketKey, snapshot] of Object.entries(marketSnapshots.market)) {
        if (!snapshot) continue
        if (!allowedMarkets.includes(marketKey.toLowerCase())) continue
        
        const latestPrice = snapshot?.versions?.at(0)?.price
        const formattedPrice = latestPrice ? formatPrice(latestPrice) : '0'
        
        markets.push({
          address: snapshot.market,
          name: getTokenDisplayName(marketKey),
          token: marketKey,
          currentPrice: formattedPrice,
        })
      }
    }
    
    return markets
  } catch (error) {
    console.error('Error fetching markets:', error)
    return []
  }
}

export async function fetchOpenOrders(userAddress: string): Promise<OpenOrder[]> {
  try {
    const sdk = new PerennialSDK(sdkConfig)
    
    const supportedMarkets = [SupportedMarket.eth, SupportedMarket.btc]

    const openOrders = await sdk.markets.read.openOrders({
      address: userAddress as `0x${string}`,
      markets: supportedMarkets,
      first: 100,
      skip: 0,
      isMaker: false
    })

    const orders: OpenOrder[] = []
    
    if (openOrders && Array.isArray(openOrders)) {
      for (const order of openOrders) {
        if (!order) continue
        
        const marketName = order.market === SupportedMarket.eth ? 'ETH' : 
                          order.market === SupportedMarket.btc ? 'BTC' : 'Unknown'
        
        orders.push({
          id: order.id || '',
          marketAddress: order.market || '',
          marketName,
          side: order.side || 'long',
          amount: order.delta ? formatPrice(order.delta) : '0',
          limitPrice: order.price ? formatPrice(order.price) : '0',
          triggerComparison: order.comparison || '',
          status: order.status || 'pending',
          timestamp: order.blockTimestamp ? new Date(Number(order.blockTimestamp) * 1000).toISOString() : '',
        })
      }
    }

    return orders
  } catch (error) {
    console.error('Error fetching open orders:', error)
    return []
  }
}

export async function fetchPortfolioData(userAddress: string): Promise<PortfolioData> {
  try {
    const [markets, openOrders] = await Promise.all([
      fetchMarkets(),
      fetchOpenOrders(userAddress),
    ])

    return {
      openOrders,
      markets,
    }
  } catch (error) {
    console.error('Error fetching portfolio data:', error)
    return {
      openOrders: [],
      markets: [],
    }
  }
}