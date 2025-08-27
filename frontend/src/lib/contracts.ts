export interface ContractAddresses {
  usdc: string
  multiInvoker: string
  marketFactory: string
  markets: {
    pythEthUsdc: string
    pythBtcUsdc: string
  }
}

export const CONTRACT_ADDRESSES: ContractAddresses = {
  usdc: '0xEd64A15A6223588794A976d344990001a065F3f1',
  multiInvoker: '0x40652853a0e51D28F4eb0ca70b48E77B5dC8520E',
  marketFactory: '0x247CeaE79E5C5778e00F449eDEC1d49c06f1Ede8',
  markets: {
    pythEthUsdc: '0x6e710fDDE613609C5044813db674D4da35a593FB',
    pythBtcUsdc: '0xFEb2588d42768f0dCeF6652E138d3C9D306e1FaB',
  },
}

export const MARKET_ADDRESSES = [
  CONTRACT_ADDRESSES.markets.pythEthUsdc,
  CONTRACT_ADDRESSES.markets.pythBtcUsdc,
] as const

export function getMarketName(address: string): string {
  switch (address.toLowerCase()) {
    case CONTRACT_ADDRESSES.markets.pythEthUsdc.toLowerCase():
      return 'ETH/USDC'
    case CONTRACT_ADDRESSES.markets.pythBtcUsdc.toLowerCase():
      return 'BTC/USDC'
    default:
      return 'Unknown Market'
  }
}

export function getMarketByName(name: string): string | undefined {
  switch (name.toLowerCase()) {
    case 'eth':
    case 'ethereum':
    case 'eth/usdc':
      return CONTRACT_ADDRESSES.markets.pythEthUsdc
    case 'btc':
    case 'bitcoin':
    case 'btc/usdc':
      return CONTRACT_ADDRESSES.markets.pythBtcUsdc
    default:
      return undefined
  }
}