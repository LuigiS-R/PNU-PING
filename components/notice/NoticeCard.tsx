import Link from 'next/link'
import { Notice } from '@/lib/types'
import { DeptTag } from '@/components/ui/DeptTag'
import { deptName } from '@/lib/mock-data'
import { relativeTime, isNew } from '@/lib/time'

export function NoticeCard({ notice, now, isRead }: { notice: Notice; now: number; isRead: boolean }) {
  const fresh = isNew(notice.publishedAt, now)
  return (
    <Link href={`/n/${notice.id}`} className={`block bg-white border rounded-[var(--radius-pg-md)] px-4 py-3.5 transition-shadow hover:shadow-[var(--shadow-card)] ${notice.isImportant ? 'border-[1.5px] border-yellow bg-[#FFFCF4]' : 'border-line'}`}>
      <div className={`text-[14.5px] leading-snug text-ink ${isRead ? 'font-medium opacity-70' : 'font-bold'}`}>{notice.title}</div>
      <div className="flex items-center gap-1.5 mt-2 text-xs text-muted">
        {notice.isImportant ? <DeptTag important>중요</DeptTag> : fresh && !isRead && <span className="w-[7px] h-[7px] rounded-full bg-yellow shrink-0" />}
        <DeptTag>{deptName(notice.deptId)}</DeptTag>
        <span>{relativeTime(notice.publishedAt, now)}</span>
      </div>
    </Link>
  )
}
