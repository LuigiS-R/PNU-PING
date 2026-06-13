'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { NoticeList } from '@/components/notice/NoticeList'
import { EmptyState } from '@/components/ui/EmptyState'
import { Ping } from '@/components/ping/Ping'
import { sortByDateDesc } from '@/lib/filters'
import { usePingStore } from '@/lib/store'
import { fetchNoticesByDept } from '@/lib/api'
import { cacheNotices } from '@/lib/notice-cache'
import { Notice } from '@/lib/types'
import { NOW } from '@/lib/now'

export function FeedView() {
  const sp = useSearchParams()
  const dept = sp.get('dept') ?? undefined
  const my = sp.get('my') === '1'
  const subs = usePingStore(s => s.subscribedDepts)

  const [notices, setNotices] = useState<Notice[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const subsKey = subs.join(',')

  useEffect(() => {
    const depts = my ? subs : dept ? [dept] : null

    if (!depts) {
      setNotices([])
      return
    }

    if (depts.length === 0) {
      setNotices([])
      return
    }

    let cancelled = false
    setLoading(true)
    setError(false)

    Promise.all(depts.map(d => fetchNoticesByDept(d)))
      .then(results => {
        if (cancelled) return
        const merged = sortByDateDesc(results.flat())
        cacheNotices(merged)
        setNotices(merged)
        setLoading(false)
      })
      .catch(() => {
        if (!cancelled) {
          setError(true)
          setLoading(false)
        }
      })

    return () => { cancelled = true }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dept, my, subsKey])

  if (!dept && !my) return (
    <div className="flex flex-col items-center justify-center gap-4 py-20">
      <Ping expression="happy" size={96} />
      <div className="text-[22px] font-extrabold text-ink">안녕하세요! 👋</div>
    </div>
  )

  const heading = my ? '나의 학과 공지' : dept ?? '전체 공지'
  const emptyMine = my && subs.length === 0

  if (loading) return (
    <div className="flex flex-col gap-3">
      <h1 className="text-[21px] font-extrabold text-ink">{heading}</h1>
      <div className="text-sm text-muted text-center py-16">불러오는 중...</div>
    </div>
  )

  if (error) return (
    <div className="flex flex-col gap-3">
      <h1 className="text-[21px] font-extrabold text-ink">{heading}</h1>
      <EmptyState title="공지를 불러오지 못했어요" sub="잠시 후 다시 시도해주세요." expression="sleepy" />
    </div>
  )

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-[21px] font-extrabold text-ink">{heading}</h1>
      {emptyMine
        ? <EmptyState title="구독한 학과가 없어요" sub="사이드바의 ＋ 학과 추가로 관심 학과를 담아보세요." expression="curious" />
        : notices.length > 0
          ? <NoticeList notices={notices} now={NOW} />
          : <EmptyState title="공지가 없어요" sub="다른 학과를 골라보세요." expression="sleepy" />}
    </div>
  )
}
