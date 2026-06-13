'use client'
import { useRouter } from 'next/navigation'
import { colleges, deptsOfCollege } from '@/lib/mock-data'
import { usePingStore } from '@/lib/store'
import { MAX_SUBSCRIPTIONS } from '@/lib/types'
import { Button } from '@/components/ui/Button'
import { Ping } from '@/components/ping/Ping'

export default function Onboarding() {
  const router = useRouter()
  const subs = usePingStore(s => s.subscribedDepts)
  const subscribe = usePingStore(s => s.subscribe)
  const unsubscribe = usePingStore(s => s.unsubscribe)
  return (
    <div className="max-w-md mx-auto flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h1 className="text-[21px] font-extrabold text-ink">관심 학과를 골라주세요</h1>
        <Ping expression="flying" size={48} />
      </div>
      <div className="flex items-center justify-between text-[13px] text-muted">
        <span>최대 {MAX_SUBSCRIPTIONS}개까지 구독할 수 있어요</span>
        <span className="font-bold text-primary bg-tint px-3 py-1 rounded-full">{subs.length} / {MAX_SUBSCRIPTIONS}</span>
      </div>
      {colleges.map(c => (
        <div key={c.id} className="mt-2">
          <div className="text-xs font-bold text-muted mb-1">{c.name}</div>
          {deptsOfCollege(c.id).map(d => {
            const on = subs.includes(d.name)
            return (
              <button key={d.id} onClick={() => on ? unsubscribe(d.name) : subscribe(d.name)}
                className={`w-full flex items-center gap-3 border rounded-2xl px-4 py-3 mb-2 font-semibold text-sm ${on ? 'border-primary bg-tint' : 'border-line bg-white'}`}>
                <span className={`w-[22px] h-[22px] rounded-md border-2 flex items-center justify-center ${on ? 'bg-primary border-primary text-white' : 'border-[#D7DEE9]'}`}>{on ? '✓' : ''}</span>
                {d.name}
              </button>
            )
          })}
        </div>
      ))}
      <Button className="w-full mt-2" onClick={() => router.push('/')}>선택 완료</Button>
    </div>
  )
}
