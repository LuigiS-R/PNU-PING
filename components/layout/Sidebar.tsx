'use client'
import { useState } from 'react'
import Link from 'next/link'
import { colleges, deptsOfCollege } from '@/lib/mock-data'
import { usePingStore } from '@/lib/store'
import { AddDeptModal } from '@/components/dept/AddDeptModal'

export function Sidebar({ mobileOpen, onClose }: { mobileOpen: boolean; onClose: () => void }) {
  const loggedIn = usePingStore(s => s.loggedIn)
  const subs = usePingStore(s => s.subscribedDeptIds)
  const [open, setOpen] = useState<string | null>('eng')
  const [addOpen, setAddOpen] = useState(false)
  return (
    <>
      {mobileOpen && <div className="md:hidden fixed inset-0 z-40 bg-black/30" onClick={onClose} />}
      <aside className={`fixed md:sticky top-0 left-0 h-screen w-[256px] shrink-0 z-50 md:z-auto bg-white md:bg-white/70 backdrop-blur border-r border-line px-3 py-5 flex flex-col gap-1 overflow-y-auto transition-transform ${mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <Link href="/" onClick={onClose} className="text-2xl font-extrabold tracking-tight text-ink px-2 mb-3">
          P<span className="text-primary">i</span>NG
        </Link>
        <div className="text-[11px] font-bold tracking-wider text-sky uppercase px-2 mt-1 mb-1">단과대학</div>
        {colleges.map(c => (
          <div key={c.id}>
            <button onClick={() => setOpen(open === c.id ? null : c.id)}
              className="w-full flex items-center justify-between px-2 py-2 rounded-xl hover:bg-tint text-sm font-bold text-ink">
              {c.name}<span aria-hidden="true" className={`transition-transform ${open === c.id ? 'rotate-180' : ''}`}>▾</span>
            </button>
            {open === c.id && (
              <div className="pl-2 flex flex-col">
                {deptsOfCollege(c.id).map(d => (
                  <Link key={d.id} href={`/feed?dept=${d.id}`} onClick={onClose}
                    className="px-3 py-1.5 rounded-lg text-[13px] hover:bg-tint text-[#54607A]">
                    {d.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        {loggedIn && (
          <>
            <div className="h-px bg-line my-2" />
            <Link href="/feed?my=1" onClick={onClose} className="px-2 py-2 rounded-xl hover:bg-tint text-sm font-bold text-ink">⭐ 나의 학과 <span className="text-muted font-medium">({subs.length})</span></Link>
            <button onClick={() => setAddOpen(true)} className="text-left px-2 py-2 rounded-xl hover:bg-tint text-sm font-bold text-primary">＋ 학과 추가</button>
          </>
        )}
        <div className="h-px bg-line my-2" />
        <Link href="/saved" onClick={onClose} className="px-2 py-2 rounded-xl hover:bg-tint text-sm font-bold text-ink">🔖 저장함</Link>
        <Link href="/settings" onClick={onClose} className="px-2 py-2 rounded-xl hover:bg-tint text-sm font-bold text-ink">⚙️ 설정</Link>
        <AddDeptModal open={addOpen} onClose={() => setAddOpen(false)} />
      </aside>
    </>
  )
}
