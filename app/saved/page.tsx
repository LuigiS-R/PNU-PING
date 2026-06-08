'use client'
import { NoticeList } from '@/components/notice/NoticeList'
import { EmptyState } from '@/components/ui/EmptyState'
import { Ping } from '@/components/ping/Ping'
import { notices } from '@/lib/mock-data'
import { sortByDateDesc } from '@/lib/filters'
import { usePingStore } from '@/lib/store'
import { NOW } from '@/lib/now'

export default function Saved() {
  const savedIds = usePingStore(s => s.savedNoticeIds)
  const list = sortByDateDesc(notices.filter(n => savedIds.includes(n.id)))
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-[21px] font-extrabold text-ink">저장한 공지</h1>
      {list.length > 0 ? (
        <>
          <div className="flex flex-col items-center py-1"><Ping expression="celebrate" size={56} /><div className="text-xs text-muted mt-1">PING이 잘 기억해둘게요!</div></div>
          <NoticeList notices={list} now={NOW} />
        </>
      ) : <EmptyState title="저장한 공지가 없어요" sub="공지 상세에서 저장하기를 눌러보세요." expression="sleepy" />}
    </div>
  )
}
