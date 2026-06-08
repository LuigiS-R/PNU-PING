'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export function BottomNav() {
  const path = usePathname()
  const item = (href: string, label: string, on: boolean) => (
    <Link href={href} className={`flex-1 text-center py-3.5 text-[13px] font-bold relative ${on ? 'text-primary' : 'text-muted'}`}>
      {on && <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[3px] rounded bg-primary" />}{label}
    </Link>
  )
  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 flex border-t border-line bg-white">
      {item('/', '일반', path === '/')}
      {item('/feed', '구독', path.startsWith('/feed'))}
    </nav>
  )
}
