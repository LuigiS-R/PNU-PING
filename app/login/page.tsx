'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Ping } from '@/components/ping/Ping'
import { Button } from '@/components/ui/Button'
import { usePingStore } from '@/lib/store'

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const login = usePingStore(s => s.login)
  const subs = usePingStore(s => s.subscribedDeptIds)
  const valid = /^[^@\s]+@pusan\.ac\.kr$/.test(email)
  const submit = () => { if (!valid) return; login(email); router.push(subs.length ? '/' : '/onboarding') }
  return (
    <div className="max-w-sm mx-auto flex flex-col items-center pt-8 gap-3 text-center">
      <Ping expression="happy" size={92} />
      <div className="text-3xl font-extrabold text-ink">P<span className="text-primary">i</span>NG</div>
      <div className="text-[13px] text-muted">부산대 친구들만의 공지 메신저</div>
      <button className="w-full mt-6 flex items-center justify-center gap-2 bg-white border-[1.5px] border-line rounded-2xl py-3.5 font-bold text-ink" onClick={submit}>
        <span className="w-[18px] h-[18px] rounded-full" style={{ background: 'conic-gradient(#EA4335 0 25%,#FBBC05 0 50%,#34A853 0 75%,#4285F4 0)' }} />
        부산대 구글 계정으로 로그인
      </button>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="이메일 입력 · ___@pusan.ac.kr"
        className="w-full mt-2 bg-white border-[1.5px] border-line focus:border-sky outline-none rounded-2xl px-4 py-3.5 text-sm" />
      <div className="text-xs text-muted self-start">@pusan.ac.kr 계정만 사용할 수 있어요</div>
      <Button className="w-full mt-2 disabled:opacity-40" onClick={submit} disabled={!valid}>로그인 / 가입</Button>
    </div>
  )
}
