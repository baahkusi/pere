'use client'

import { PrivyProvider } from '@privy-io/react-auth'
import { WagmiProvider, createConfig } from '@privy-io/wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { arbitrumSepolia } from 'viem/chains'
import { http } from 'wagmi'
import { privyConfig } from '@/lib/privy-config'

interface ProvidersProps {
  children: React.ReactNode
}

// Create Wagmi config using Privy's createConfig
const wagmiConfig = createConfig({
  chains: [arbitrumSepolia],
  transports: {
    [arbitrumSepolia.id]: http('https://sepolia-rollup.arbitrum.io/rpc'),
  },
})

// Create a client for React Query
const queryClient = new QueryClient()

export default function Providers({ children }: ProvidersProps) {
  return (
    <PrivyProvider
      appId={privyConfig.appId}
      config={{
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          ethereum: {
            createOnLogin: 'users-without-wallets'
          }
        },
        // Configure supported chains
        supportedChains: [arbitrumSepolia],
      }}
    >
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={wagmiConfig}>
          {children}
        </WagmiProvider>
      </QueryClientProvider>
    </PrivyProvider>
  )
}