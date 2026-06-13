import { describe, it, expect, beforeEach } from 'vitest'
import { usePingStore } from '@/lib/store'

const reset = () => usePingStore.setState({
  loggedIn: false, email: undefined, subscribedDepts: [],
  savedNoticeIds: [], readNoticeIds: [],
  settings: { newNotice: true, pingVoice: true },
})

describe('store', () => {
  beforeEach(reset)

  it('login은 이메일/로그인 상태 설정', () => {
    usePingStore.getState().login('jenny@pusan.ac.kr')
    expect(usePingStore.getState().loggedIn).toBe(true)
    expect(usePingStore.getState().email).toBe('jenny@pusan.ac.kr')
  })

  it('구독 추가는 최대 4개', () => {
    const s = usePingStore.getState()
    s.subscribe('컴퓨터공학과'); s.subscribe('기계공학과'); s.subscribe('전기공학과'); s.subscribe('의류학과'); s.subscribe('경제학과')
    expect(usePingStore.getState().subscribedDepts.length).toBe(4)
  })

  it('중복 구독 무시', () => {
    usePingStore.getState().subscribe('컴퓨터공학과')
    usePingStore.getState().subscribe('컴퓨터공학과')
    expect(usePingStore.getState().subscribedDepts).toEqual(['컴퓨터공학과'])
  })

  it('구독 해제', () => {
    usePingStore.getState().subscribe('컴퓨터공학과')
    usePingStore.getState().unsubscribe('컴퓨터공학과')
    expect(usePingStore.getState().subscribedDepts).toEqual([])
  })

  it('저장 토글', () => {
    usePingStore.getState().toggleSave('n1')
    expect(usePingStore.getState().savedNoticeIds).toEqual(['n1'])
    usePingStore.getState().toggleSave('n1')
    expect(usePingStore.getState().savedNoticeIds).toEqual([])
  })

  it('읽음 표시는 멱등', () => {
    usePingStore.getState().markRead('n1')
    usePingStore.getState().markRead('n1')
    expect(usePingStore.getState().readNoticeIds).toEqual(['n1'])
  })

  it('설정 토글', () => {
    usePingStore.getState().toggleSetting('newNotice')
    expect(usePingStore.getState().settings.newNotice).toBe(false)
  })

  it('logout은 상태를 초기화', () => {
    const s = usePingStore.getState()
    s.login('a@pusan.ac.kr'); s.subscribe('컴퓨터공학과'); s.toggleSave('n1')
    usePingStore.getState().logout()
    const state = usePingStore.getState()
    expect(state.loggedIn).toBe(false)
    expect(state.email).toBeUndefined()
    expect(state.subscribedDepts).toEqual([])
    expect(state.savedNoticeIds).toEqual([])
    expect(state.settings).toEqual({ newNotice: true, pingVoice: true })
  })
})
