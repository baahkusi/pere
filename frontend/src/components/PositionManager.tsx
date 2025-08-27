'use client'

import { useState, useEffect } from 'react'
import { usePrivy } from '@privy-io/react-auth'
import { useWalletClient } from 'wagmi'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { fetchMarkets, openPosition, closePosition } from '@/lib/perennial-data'
import type { MarketInfo } from '@/types'
import {getMarketByName} from "@/lib/contracts";

export default function PositionManager() {
  const { authenticated } = usePrivy()
  const { data: walletClient } = useWalletClient()
  const [side, setSide] = useState<'long' | 'short'>('long')
  const [amount, setAmount] = useState('')
  const [limitPrice, setLimitPrice] = useState('')
  const [loading, setLoading] = useState(false)
  const [markets, setMarkets] = useState<MarketInfo[]>([])
  const [selectedMarket, setSelectedMarket] = useState<string>('')
  const [loadingMarkets, setLoadingMarkets] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    if (authenticated) {
      loadMarkets()
    }
  }, [authenticated])

  const loadMarkets = async () => {
    setLoadingMarkets(true)
    try {
      const marketData = await fetchMarkets()
      setMarkets(marketData)
      if (marketData.length > 0 && !selectedMarket) {
        setSelectedMarket(marketData[0].address)
      }
    } catch (error) {
      console.error('Error loading markets:', error)
    } finally {
      setLoadingMarkets(false)
    }
  }

  const handleOpenPosition = async () => {
    if (!walletClient || !authenticated || !amount || !selectedMarket) {
      setError('Please fill in all fields and connect wallet')
      return
    }
    
    setLoading(true)
    setError('')
    setSuccess('')
    
    try {
      const txHash = await openPosition(walletClient, {
        marketAddress: getMarketByName(selectedMarket) ?? "",
        side,
        amount: amount,
        limitPrice: limitPrice || undefined,
      })
      
      setSuccess(`Position opened! Transaction: ${txHash}`)
      setAmount('')
      setLimitPrice('')
    } catch (error) {
      console.error('Error opening position:', error)
      setError(error instanceof Error ? error.message : 'Failed to open position')
    } finally {
      setLoading(false)
    }
  }

  const handleClosePosition = async () => {
    if (!walletClient || !authenticated || !selectedMarket) {
      setError('Please select a market and connect wallet')
      return
    }
    
    setLoading(true)
    setError('')
    setSuccess('')
    
    try {
      const txHash = await closePosition(walletClient, {
        marketAddress: getMarketByName(selectedMarket) ?? "",
        side,
        limitPrice: limitPrice || undefined,
      })
      
      setSuccess(`Position closed! Transaction: ${txHash}`)
      setLimitPrice('')
    } catch (error) {
      console.error('Error closing position:', error)
      setError(error instanceof Error ? error.message : 'Failed to close position')
    } finally {
      setLoading(false)
    }
  }

  if (!authenticated) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Position Manager</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Please connect your wallet to manage positions</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Position Manager</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Market</Label>
          <Select 
            value={selectedMarket} 
            onValueChange={setSelectedMarket}
            disabled={loadingMarkets}
          >
            <SelectTrigger>
              <SelectValue placeholder={loadingMarkets ? "Loading markets..." : "Select a market"} />
            </SelectTrigger>
            <SelectContent>
              {markets.map((market) => (
                <SelectItem key={market.address} value={market.address}>
                  <div className="flex justify-between items-center w-full">
                    <span>{market.name}</span>
                    <span className="text-muted-foreground ml-2">${market.currentPrice}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Position Side</Label>
          <Tabs value={side} onValueChange={(value) => setSide(value as 'long' | 'short')}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="long" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
                Long
              </TabsTrigger>
              <TabsTrigger value="short" className="data-[state=active]:bg-red-500 data-[state=active]:text-white">
                Short
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="space-y-2">
          <Label htmlFor="amount">Position Size</Label>
          <Input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            step="0.01"
            min="0"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="limitPrice">Limit Price</Label>
          <Input
            id="limitPrice"
            type="number"
            value={limitPrice}
            onChange={(e) => setLimitPrice(e.target.value)}
            placeholder="0.00"
            step="0.01"
            min="0"
          />
        </div>


        {error && (
          <div className="p-3 text-sm text-red-600 bg-red-50 rounded-md">
            {error}
          </div>
        )}

        {success && (
          <div className="p-3 text-sm text-green-600 bg-green-50 rounded-md">
            {success}
          </div>
        )}

        <div className="flex gap-2">
          <Button
            onClick={handleOpenPosition}
            disabled={loading || !amount || !selectedMarket}
            className="flex-1"
          >
            {loading ? 'Opening...' : 'Open Position'}
          </Button>
          <Button
            onClick={handleClosePosition}
            disabled={loading}
            variant="secondary"
            className="flex-1"
          >
            {loading ? 'Closing...' : 'Close Position'}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}