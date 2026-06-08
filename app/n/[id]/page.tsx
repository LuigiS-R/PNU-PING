'use client'
import { use, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { notices, deptName } from '@/lib/mock-data'
import { DeptTag } from '@/components/ui/DeptTag'
import { Ping } from '@/components/ping/Ping'
import { usePingStore } from '@/lib/store'
import { EmptyState } from '@/components/ui/EmptyState'

export default function NoticeDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const notice = notices.find(n => n.id === id)
  const saved = usePingStore(s => s.savedNoticeIds.includes(id))
  const toggleSave = usePingStore(s => s.toggleSave)
  const markRead = usePingStore(s => s.markRead)
  useEffect(() => { if (notice) markRead(id) }, [id, notice, markRead])
  if (!notice) return <EmptyState title="공지를 찾을 수 없어요" expression="curious" />
  return (
    <div className="flex flex-col gap-3 max-w-[640px]">
      <button onClick={() => router.back()} className="self-start text-muted text-sm">← 뒤로</button>
      <DeptTag>{deptName(notice.deptId)}</DeptTag>
      <h1 className="text-xl font-extrabold text-ink leading-snug">{notice.title}</h1>
      <div className="text-xs text-muted">{notice.publishedAt.slice(0, 10)} · 조회 {notice.views.toLocaleString()}</div>
      <div className="flex justify-center py-2"><Ping expression="reading" size={72} /></div>
      <p className="text-[14.5px] leading-7 text-[#54607A] whitespace-pre-wrap">{notice.body}</p>
      <button onClick={() => toggleSave(id)}
        className={`flex items-center justify-center gap-2 font-extrabold rounded-2xl py-3.5 mt-2 ${saved ? 'bg-tint text-primary' : 'bg-yellow text-[#5A4A12]'}`}>
        {saved ? '✓ 저장됨' : '🔖 저장하기'}
      </button>
    </div>
  )
}
