'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { usePrivy } from '@privy-io/react-auth'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function WalletConnection() {
  const { address, isConnected } = useAccount()
  const { login, logout, authenticated, ready } = usePrivy()

  if (!ready) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex items-center gap-4">
      {authenticated && isConnected ? (
        <div className="flex items-center gap-4">
          <Badge variant="secondary">
            {address ? 
              `${address.slice(0, 6)}...${address.slice(-4)}` : 
              'Connected'
            }
          </Badge>
          <Button
            onClick={logout}
            variant="destructive"
            size="sm"
          >
            Disconnect
          </Button>
        </div>
      ) : (
        <Button
          onClick={login}
          size="sm"
        >
          Connect Wallet
        </Button>
      )}
    </div>
  )
}