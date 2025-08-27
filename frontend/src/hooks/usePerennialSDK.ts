import { useWalletClient } from 'wagmi'
import { CONTRACT_ADDRESSES, MARKET_ADDRESSES, getMarketName, getMarketByName } from '@/lib/contracts'

export function usePerennialSDK() {
  const { data: walletClient } = useWalletClient()
  
  return {
    walletClient,
    hasWallet: !!walletClient,
    contracts: CONTRACT_ADDRESSES,
    marketAddresses: MARKET_ADDRESSES,
    getMarketName,
    getMarketByName,
  }
}