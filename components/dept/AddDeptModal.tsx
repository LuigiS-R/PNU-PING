'use client'
import { colleges, deptsOfCollege } from '@/lib/mock-data'
import { usePingStore } from '@/lib/store'
import { MAX_SUBSCRIPTIONS } from '@/lib/types'
export function AddDeptModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const subs = usePingStore(s => s.subscribedDeptIds)
  const subscribe = usePingStore(s => s.subscribe)
  const unsubscribe = usePingStore(s => s.unsubscribe)
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4" onClick={onClose}>
      <div className="bg-white rounded-[var(--radius-pg-lg)] w-full max-w-md max-h-[80vh] overflow-y-auto p-6" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-extrabold text-lg text-ink">학과 추가</h3>
          <span className="text-xs font-bold text-primary bg-tint px-3 py-1 rounded-full">{subs.length} / {MAX_SUBSCRIPTIONS}</span>
        </div>
        {colleges.map(c => (
          <div key={c.id} className="mb-3">
            <div className="text-xs font-bold text-muted mb-1">{c.name}</div>
            <div className="flex flex-wrap gap-2">
              {deptsOfCollege(c.id).map(d => {
                const on = subs.includes(d.id)
                return <button key={d.id} onClick={() => on ? unsubscribe(d.id) : subscribe(d.id)}
                  className={`px-3 py-1.5 rounded-full text-sm font-semibold border-[1.5px] ${on ? 'bg-primary border-primary text-white' : 'bg-white border-line text-[#54607A]'}`}>{d.name}</button>
              })}
            </div>
          </div>
        ))}
        <button onClick={onClose} className="w-full mt-2 bg-primary text-white font-bold rounded-2xl py-3">완료</button>
      </div>
    </div>
  )
}
