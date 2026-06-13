'use client'
import { useState } from 'react'
import type { ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { Toggle } from '@/components/ui/Toggle'
import { AddDeptModal } from '@/components/dept/AddDeptModal'
import { usePingStore } from '@/lib/store'
import { MAX_SUBSCRIPTIONS } from '@/lib/types'

function Row({ icon, label, right }: { icon: string; label: string; right: ReactNode }) {
  return (
    <div className="flex items-center gap-3 bg-white border-b border-line px-4 py-4 font-semibold text-[14.5px]">
      <span aria-hidden="true" className="w-8 h-8 rounded-lg bg-tint text-primary flex items-center justify-center shrink-0">{icon}</span>
      {label}<span className="ml-auto flex items-center">{right}</span>
    </div>
  )
}

export default function Settings() {
  const router = useRouter()
  const email = usePingStore(st => st.email)
  const loggedIn = usePingStore(st => st.loggedIn)
  const subscribedDepts = usePingStore(st => st.subscribedDepts)
  const settings = usePingStore(st => st.settings)
  const logout = usePingStore(st => st.logout)
  const toggleSetting = usePingStore(st => st.toggleSetting)
  const [addOpen, setAddOpen] = useState(false)
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-[21px] font-extrabold text-ink mb-2">설정</h1>
      <div className="rounded-[var(--radius-pg-lg)] overflow-hidden border border-line">
        <Row icon="👤" label={email ?? '로그인 필요'} right={loggedIn
          ? <button onClick={() => { logout(); router.push('/login') }} className="text-xs text-muted">로그아웃</button>
          : <button onClick={() => router.push('/login')} className="text-xs text-primary">로그인</button>} />
        <Row icon="🎓" label="구독 학과 관리" right={<button onClick={() => setAddOpen(true)} className="text-xs text-muted">{subscribedDepts.length} / {MAX_SUBSCRIPTIONS}</button>} />
        <Row icon="🔔" label="새 공지 알림" right={<Toggle on={settings.newNotice} onClick={() => toggleSetting('newNotice')} />} />
        <Row icon="💬" label="PING 한마디 받기" right={<Toggle on={settings.pingVoice} onClick={() => toggleSetting('pingVoice')} />} />
        <Row icon="ⓘ" label="버전 정보" right={<span className="text-xs text-muted">1.0.0</span>} />
      </div>
      <AddDeptModal open={addOpen} onClose={() => setAddOpen(false)} />
    </div>
  )
}
