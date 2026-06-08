'use client'
import { useState } from 'react'
import { SearchBar } from '@/components/ui/SearchBar'
import { NoticeList } from '@/components/notice/NoticeList'
import { Ping } from '@/components/ping/Ping'
import { notices } from '@/lib/mock-data'
import { searchNotices, sortByDateDesc } from '@/lib/filters'
import { NOW } from '@/lib/now'

export default function Search() {
  const [q, setQ] = useState('')
  const results = q.trim() ? sortByDateDesc(searchNotices(notices, q)) : []
  return (
    <div className="flex flex-col gap-3">
      <SearchBar value={q} onChange={setQ} active placeholder="공지를 검색해보세요" />
      {q.trim() ? (
        <>
          <div className="flex flex-col items-center py-2">
            <Ping expression="curious" size={58} />
            <div className="text-xs text-muted mt-1">PING이 {results.length}개의 공지를 찾았어요</div>
          </div>
          <NoticeList notices={results} now={NOW} />
        </>
      ) : <div className="text-sm text-muted text-center py-10">검색어를 입력해보세요. 제목·내용을 함께 찾아드려요.</div>}
    </div>
  )
}
