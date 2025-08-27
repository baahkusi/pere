export interface MarketInfo {
  address: string
  name: string
  token: string
  currentPrice: string
}

export interface OpenOrder {
  id: string
  marketAddress: string
  marketName: string
  side: 'long' | 'short' | 'maker'
  amount: string
  limitPrice: string
  triggerComparison: string
  status: string
  timestamp: string
}

export interface PortfolioData {
  openOrders: OpenOrder[]
  markets: MarketInfo[]
}

export interface TradeParams {
  marketAddress: string
  side: 'long' | 'short' | 'maker'
  amount: string
  limitPrice?: string
}

export interface ClosePositionParams {
  marketAddress: string
  amount?: string // If not provided, closes entire position
  limitPrice?: string
  side: 'long' | 'short' | 'maker'
}