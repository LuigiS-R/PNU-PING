'use client'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Chip } from '@/components/ui/Chip'
import { NoticeList } from '@/components/notice/NoticeList'
import { EmptyState } from '@/components/ui/EmptyState'
import { notices, deptName } from '@/lib/mock-data'
import { filterNotices, sortByDateDesc } from '@/lib/filters'
import { NoticeCategory } from '@/lib/types'
import { usePingStore } from '@/lib/store'
import { NOW } from '@/lib/now'

const CATS: (NoticeCategory | '전체')[] = ['전체', '장학', '학사', '행사', '취업']

export function FeedView() {
  const sp = useSearchParams()
  const dept = sp.get('dept') ?? undefined
  const my = sp.get('my') === '1'
  const subs = usePingStore(s => s.subscribedDeptIds)
  const [cat, setCat] = useState<NoticeCategory | '전체'>('전체')

  const deptIds = my ? subs : dept ? [dept] : undefined
  const list = sortByDateDesc(filterNotices(notices, { deptIds, category: cat === '전체' ? undefined : cat }))
  const heading = my ? '나의 학과 공지' : dept ? deptName(dept) : '전체 공지'
  const emptyMine = my && subs.length === 0

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-[21px] font-extrabold text-ink">{heading}</h1>
      <div className="flex gap-2 flex-wrap">{CATS.map(c => <Chip key={c} active={cat === c} onClick={() => setCat(c)}>{c}</Chip>)}</div>
      {emptyMine
        ? <EmptyState title="구독한 학과가 없어요" sub="사이드바의 ＋ 학과 추가로 관심 학과를 담아보세요." expression="curious" />
        : list.length > 0 ? <NoticeList notices={list} now={NOW} />
          : <EmptyState title="공지가 없어요" sub="다른 학과나 카테고리를 골라보세요." expression="sleepy" />}
    </div>
  )
}
