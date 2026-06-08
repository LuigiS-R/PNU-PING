'use client'
import { useState } from 'react'
import { BgBlobs } from './BgBlobs'
import { Sidebar } from './Sidebar'
import { TopBar } from './TopBar'
import { BottomNav } from './BottomNav'
export function AppShell({ children }: { children: React.ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  return (
    <div className="relative min-h-screen">
      <BgBlobs />
      <div className="relative z-[1] flex">
        <Sidebar mobileOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
        <div className="flex-1 min-w-0 flex flex-col min-h-screen">
          <TopBar onMenu={() => setDrawerOpen(true)} />
          <main className="flex-1 max-w-[860px] w-full mx-auto px-5 py-5 pb-24 md:pb-5">{children}</main>
        </div>
      </div>
      <BottomNav />
    </div>
  )
}
