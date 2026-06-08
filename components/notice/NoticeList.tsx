'use client'
import { Notice } from '@/lib/types'
import { NoticeCard } from './NoticeCard'
import { usePingStore } from '@/lib/store'

export function NoticeList({ notices, now }: { notices: Notice[]; now: number }) {
  const readIds = usePingStore(s => s.readNoticeIds)
  return (
    <div className="flex flex-col gap-2">
      {notices.map(n => <NoticeCard key={n.id} notice={n} now={now} isRead={readIds.includes(n.id)} />)}
    </div>
  )
}
