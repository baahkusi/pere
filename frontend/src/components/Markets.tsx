'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { RefreshCw } from 'lucide-react'
import { fetchMarkets } from '@/lib/perennial-data'
import type { MarketInfo } from '@/types'

export default function Markets() {
  const [markets, setMarkets] = useState<MarketInfo[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadMarkets()
  }, [])

  const loadMarkets = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const marketData = await fetchMarkets()
      setMarkets(marketData)
    } catch (error) {
      console.error('Error fetching markets:', error)
      setError('Failed to fetch markets')
      setMarkets([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>Available Markets</CardTitle>
        <Button
          onClick={loadMarkets}
          disabled={loading}
          size="sm"
          variant="outline"
        >
          <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
        </Button>
      </CardHeader>
      <CardContent>
        {loading ? (
          <p>Loading markets...</p>
        ) : error ? (
          <div className="text-red-500 text-sm">
            {error}
          </div>
        ) : (
          <div className="space-y-2">
            {markets.length === 0 ? (
              <p className="text-muted-foreground">No markets available</p>
            ) : (
              markets.map((market) => (
                <Card key={market.address}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-medium capitalize">{market.name}</span>
                        <p className="text-sm text-muted-foreground uppercase">
                          {market.address.slice(0, 6)}-USD
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${market.currentPrice}</p>
                        <p className="text-sm text-muted-foreground">Current Price</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}