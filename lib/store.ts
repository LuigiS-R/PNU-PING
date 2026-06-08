'use client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { UserState, Settings, MAX_SUBSCRIPTIONS } from './types'
type Actions = {
  login: (email: string) => void
  logout: () => void
  subscribe: (deptId: string) => void
  unsubscribe: (deptId: string) => void
  toggleSave: (noticeId: string) => void
  markRead: (noticeId: string) => void
  toggleSetting: (key: keyof Settings) => void
}
const initial: UserState = { loggedIn: false, email: undefined, subscribedDeptIds: [], savedNoticeIds: [], readNoticeIds: [], settings: { newNotice: true, importantOnly: false, pingVoice: true } }
export const usePingStore = create<UserState & Actions>()(
  persist(
    (set) => ({
      ...initial,
      login: (email) => set({ loggedIn: true, email }),
      logout: () => set({ ...initial }),
      subscribe: (deptId) => set((s) => s.subscribedDeptIds.includes(deptId) || s.subscribedDeptIds.length >= MAX_SUBSCRIPTIONS ? s : { subscribedDeptIds: [...s.subscribedDeptIds, deptId] }),
      unsubscribe: (deptId) => set((s) => ({ subscribedDeptIds: s.subscribedDeptIds.filter(id => id !== deptId) })),
      toggleSave: (id) => set((s) => ({ savedNoticeIds: s.savedNoticeIds.includes(id) ? s.savedNoticeIds.filter(x => x !== id) : [...s.savedNoticeIds, id] })),
      markRead: (id) => set((s) => s.readNoticeIds.includes(id) ? s : ({ readNoticeIds: [...s.readNoticeIds, id] })),
      toggleSetting: (key) => set((s) => ({ settings: { ...s.settings, [key]: !s.settings[key] } })),
    }),
    { name: 'ping-store' },
  ),
)
