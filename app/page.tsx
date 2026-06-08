'use client'
import { useState } from 'react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Chip } from '@/components/ui/Chip'
import { NoticeList } from '@/components/notice/NoticeList'
import { Ping } from '@/components/ping/Ping'
import { notices } from '@/lib/mock-data'
import { importantFirst, sortByDateDesc, filterNotices } from '@/lib/filters'
import { isNew } from '@/lib/time'
import { usePingStore } from '@/lib/store'
import { NOW } from '@/lib/now'

export default function Home() {
  const loggedIn = usePingStore(s => s.loggedIn)
  const email = usePingStore(s => s.email)
  const subs = usePingStore(s => s.subscribedDeptIds)
  const [mine, setMine] = useState(false)
  const base = mine && loggedIn ? filterNotices(notices, { deptIds: subs }) : notices
  const important = importantFirst(base).filter(n => n.isImportant)
  const fresh = sortByDateDesc(base).filter(n => isNew(n.publishedAt, NOW))
  const newCount = fresh.length
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div>
          <div className="text-[22px] font-extrabold text-ink">안녕{loggedIn ? `, ${email?.split('@')[0]}님` : '하세요'}! 👋</div>
          <div className="text-[13px] text-muted mt-0.5">PING이 오늘 새 소식 {newCount}개를 가져왔어요</div>
        </div>
        <Ping expression="happy" size={54} className="ml-auto" />
      </div>
      <div className="flex gap-2">
        <Chip active={!mine} onClick={() => setMine(false)}>전체</Chip>
        {loggedIn && <Chip active={mine} onClick={() => setMine(true)}>나의 학과</Chip>}
      </div>
      {important.length > 0 && <><SectionTitle>⭐ 중요 공지</SectionTitle><NoticeList notices={important} now={NOW} /></>}
      <SectionTitle>🔔 새로 도착한 소식</SectionTitle>
      {fresh.length > 0 ? <NoticeList notices={fresh} now={NOW} />
        : <div className="text-sm text-muted py-6 text-center">새 공지가 없어요. 졸린 PING이 쉬는 중이에요 😴</div>}
    </div>
  )
}
