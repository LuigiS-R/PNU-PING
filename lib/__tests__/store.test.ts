import { describe, it, expect, beforeEach } from 'vitest'
import { usePingStore } from '@/lib/store'
const reset = () => usePingStore.setState({ loggedIn: false, email: undefined, subscribedDeptIds: [], savedNoticeIds: [], readNoticeIds: [], settings: { newNotice: true, importantOnly: false, pingVoice: true } })
describe('store', () => {
  beforeEach(reset)
  it('login은 이메일/로그인 상태 설정', () => { usePingStore.getState().login('jenny@pusan.ac.kr'); expect(usePingStore.getState().loggedIn).toBe(true); expect(usePingStore.getState().email).toBe('jenny@pusan.ac.kr') })
  it('구독 추가는 최대 4개', () => { const s = usePingStore.getState(); s.subscribe('cse'); s.subscribe('me'); s.subscribe('ee'); s.subscribe('cloth'); s.subscribe('econ'); expect(usePingStore.getState().subscribedDeptIds.length).toBe(4) })
  it('중복 구독 무시', () => { usePingStore.getState().subscribe('cse'); usePingStore.getState().subscribe('cse'); expect(usePingStore.getState().subscribedDeptIds).toEqual(['cse']) })
  it('구독 해제', () => { usePingStore.getState().subscribe('cse'); usePingStore.getState().unsubscribe('cse'); expect(usePingStore.getState().subscribedDeptIds).toEqual([]) })
  it('저장 토글', () => { usePingStore.getState().toggleSave('n1'); expect(usePingStore.getState().savedNoticeIds).toEqual(['n1']); usePingStore.getState().toggleSave('n1'); expect(usePingStore.getState().savedNoticeIds).toEqual([]) })
  it('읽음 표시는 멱등', () => { usePingStore.getState().markRead('n1'); usePingStore.getState().markRead('n1'); expect(usePingStore.getState().readNoticeIds).toEqual(['n1']) })
  it('설정 토글', () => { usePingStore.getState().toggleSetting('importantOnly'); expect(usePingStore.getState().settings.importantOnly).toBe(true) })
})
