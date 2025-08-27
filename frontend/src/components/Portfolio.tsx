'use client'

import { useState, useEffect } from 'react'
import { usePrivy } from '@privy-io/react-auth'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { RefreshCw } from 'lucide-react'
import { fetchPortfolioData } from '@/lib/perennial-data'
import type { OpenOrder } from '@/types'

export default function Portfolio() {
  const { authenticated, user } = usePrivy()
  const [openOrders, setOpenOrders] = useState<OpenOrder[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (authenticated && user?.wallet?.address) {
      fetchPortfolioDataFromContracts()
    }
  }, [authenticated, user?.wallet?.address])

  const fetchPortfolioDataFromContracts = async () => {
    if (!user?.wallet?.address) return

    setLoading(true)
    setError(null)
    
    try {
      const portfolioData = await fetchPortfolioData(user.wallet.address)
      
      setOpenOrders(portfolioData.openOrders)
    } catch (error) {
      console.error('Error fetching portfolio data:', error)
      setError('Failed to fetch portfolio data')
      
      // Reset to empty data on error
      setOpenOrders([])
    } finally {
      setLoading(false)
    }
  }

  if (!authenticated) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Portfolio</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Please connect your wallet to view your portfolio</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>Portfolio</CardTitle>
        <Button
          onClick={fetchPortfolioDataFromContracts}
          disabled={loading}
          size="sm"
          variant="outline"
        >
          <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
        </Button>
      </CardHeader>
      <CardContent>
        {loading ? (
          <p>Loading portfolio data...</p>
        ) : (
          <div className="space-y-4">
            {error && (
              <div className="text-red-500 text-sm mb-4">
                {error}
              </div>
            )}


            <div>
              <h3 className="text-lg font-medium mb-3">Open Orders</h3>
              {openOrders.length === 0 ? (
                <p className="text-muted-foreground">No open orders</p>
              ) : (
                <div className="space-y-2">
                  {openOrders.map((order, index) => (
                    <Card key={`${order.id}-${index}`}>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-medium">{order.marketName}</span>
                              <Badge variant={
                                order.side === 'long' ? 'default' : 
                                order.side === 'short' ? 'destructive' : 
                                'secondary'
                              }>
                                {order.side.toUpperCase()}
                              </Badge>
                              <Badge variant="outline">
                                {order.status.toUpperCase()}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">Size: {order.amount}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Limit: ${order.limitPrice}</p>
                            <p className="text-xs text-muted-foreground">
                              {order.timestamp && new Date(order.timestamp).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}