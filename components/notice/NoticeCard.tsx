import Link from 'next/link'
import { Notice } from '@/lib/types'
import { relativeTime, isNew } from '@/lib/time'

export function NoticeCard({ notice, now, isRead }: { notice: Notice; now: number; isRead: boolean }) {
  const fresh = isNew(notice.publishedAt, now)
  return (
    <Link href={`/n/${notice.id}`} className="block bg-white border border-line rounded-[var(--radius-pg-md)] px-4 py-3.5 transition-shadow hover:shadow-[var(--shadow-card)]">
      <div className="text-[14.5px] font-bold leading-snug text-ink">{notice.title}</div>
      <div className="flex items-center gap-1.5 mt-2 text-xs text-muted">
        {fresh && !isRead && <span className="w-[7px] h-[7px] rounded-full bg-yellow shrink-0" />}
        <span>{relativeTime(notice.publishedAt, now)}</span>
      </div>
    </Link>
  )
}
