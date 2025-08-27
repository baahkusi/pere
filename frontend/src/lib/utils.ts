import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: bigint | string | number, decimals: number = 6): string {
  if (typeof price === 'string') {
    price = BigInt(price)
  } else if (typeof price === 'number') {
    price = BigInt(Math.floor(price))
  }
  
  const divisor = BigInt(10 ** decimals)
  const wholePart = price / divisor
  const fractionalPart = price % divisor
  
  const fractionalStr = fractionalPart.toString().padStart(decimals, '0')
  const fractionalNumber = Number(`0.${fractionalStr}`)
  
  const fullNumber = Number(wholePart.toString()) + fractionalNumber
  
  return fullNumber.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}

export function getTokenDisplayName(tokenKey: string): string {
  const tokenNames: Record<string, string> = {
    'eth': 'Ethereum',
    'btc': 'Bitcoin', 
    'sol': 'Solana',
    'arb': 'Arbitrum',
    'op': 'Optimism',
    'matic': 'Polygon',
    'link': 'Chainlink',
    'aave': 'Aave',
    'uni': 'Uniswap',
    'crv': 'Curve',
    'mkr': 'Maker',
    'comp': 'Compound',
    'snx': 'Synthetix',
    'yfi': 'Yearn Finance',
    'sushi': 'SushiSwap',
    'grt': 'The Graph',
    'bal': 'Balancer',
    'ens': 'Ethereum Name Service',
    'ldo': 'Lido',
    'rpl': 'Rocket Pool'
  }
  
  return tokenNames[tokenKey.toLowerCase()] || tokenKey.charAt(0).toUpperCase() + tokenKey.slice(1)
}
