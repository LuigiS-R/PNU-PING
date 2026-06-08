'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { usePingStore } from '@/lib/store'
import { notices } from '@/lib/mock-data'
export function TopBar() {
  const router = useRouter()
  const loggedIn = usePingStore(s => s.loggedIn)
  const email = usePingStore(s => s.email)
  const readIds = usePingStore(s => s.readNoticeIds)
  const unread = Math.min(99, notices.filter(n => !readIds.includes(n.id)).length)
  return (
    <header className="sticky top-0 z-30 flex items-center gap-3 px-5 py-3 bg-bg/80 backdrop-blur border-b border-line">
      <Link href="/" className="md:hidden text-xl font-extrabold text-ink">P<span className="text-primary">i</span>NG</Link>
      <button onClick={() => router.push('/search')}
        className="flex-1 max-w-[480px] flex items-center gap-2 bg-white border border-line rounded-2xl px-3.5 py-2.5 text-sm text-muted">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#8A93A6" strokeWidth="2"/><path d="M20 20l-3-3" stroke="#8A93A6" strokeWidth="2" strokeLinecap="round"/></svg>
        공지 검색...
      </button>
      <div className="ml-auto flex items-center gap-2">
        <Link href="/saved" className="relative w-9 h-9 rounded-xl bg-white border border-line flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 8a6 6 0 1112 0c0 7 2 8 2 8H4s2-1 2-8" stroke="#5B8DEF" strokeWidth="2" strokeLinecap="round"/></svg>
          {unread > 0 && <span className="absolute -top-1.5 -right-1.5 bg-[#FF5A5F] text-white text-[11px] font-extrabold rounded-full px-1.5">{unread}</span>}
        </Link>
        {loggedIn
          ? <div className="w-9 h-9 rounded-full bg-primary text-white font-bold flex items-center justify-center">{(email ?? 'U')[0].toUpperCase()}</div>
          : <Link href="/login" className="bg-primary text-white font-bold rounded-2xl px-4 py-2 text-sm">로그인</Link>}
      </div>
    </header>
  )
}
