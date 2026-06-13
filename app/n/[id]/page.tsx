'use client'
import { use, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getCachedNotice } from '@/lib/notice-cache'
import { DeptTag } from '@/components/ui/DeptTag'
import { Ping } from '@/components/ping/Ping'
import { usePingStore } from '@/lib/store'
import { EmptyState } from '@/components/ui/EmptyState'

export default function NoticeDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const notice = getCachedNotice(id)
  const markRead = usePingStore(s => s.markRead)
  useEffect(() => { if (notice) markRead(id) }, [id, notice, markRead])
  if (!notice) return <EmptyState title="공지를 찾을 수 없어요" expression="curious" />
  return (
    <div className="flex flex-col gap-3 max-w-[640px]">
      <button onClick={() => router.back()} className="self-start text-muted text-sm">← 뒤로</button>
      <div className="self-start"><DeptTag>{notice.department}</DeptTag></div>
      <h1 className="text-xl font-extrabold text-ink leading-snug">{notice.title}</h1>
      <div className="text-xs text-muted">{notice.publishedAt.slice(0, 10)}</div>
      <div className="flex justify-center py-2"><Ping expression="reading" size={72} /></div>
      <p className="text-[14.5px] leading-7 text-[#54607A] whitespace-pre-wrap">{notice.body}</p>
    </div>
  )
}
