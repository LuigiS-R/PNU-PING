import { BgBlobs } from './BgBlobs'
import { Sidebar } from './Sidebar'
import { TopBar } from './TopBar'
export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <BgBlobs />
      <div className="relative z-[1] flex">
        <Sidebar />
        <div className="flex-1 min-w-0 flex flex-col min-h-screen">
          <TopBar />
          <main className="flex-1 max-w-[860px] w-full mx-auto px-5 py-5">{children}</main>
        </div>
      </div>
    </div>
  )
}
