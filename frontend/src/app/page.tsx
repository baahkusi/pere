"use client"

import WalletConnection from '@/components/WalletConnection'
import PositionManager from '@/components/PositionManager'
import Portfolio from '@/components/Portfolio'
import Markets from '@/components/Markets'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <h1 className="text-2xl font-bold">Perennial Trading</h1>
          <WalletConnection />
        </div>
      </header>

      <main className="container mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="space-y-6">
            <Portfolio />
          </div>
          <div className="space-y-6">
            <PositionManager />
          </div>
          <div>
            <Markets />
          </div>
        </div>
      </main>
    </div>
  );
}