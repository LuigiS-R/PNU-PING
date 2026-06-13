'use client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { UserState, Settings, MAX_SUBSCRIPTIONS } from './types'
type Actions = {
  login: (email: string) => void
  logout: () => void
  subscribe: (dept: string) => void
  unsubscribe: (dept: string) => void
  toggleSave: (noticeId: string) => void
  markRead: (noticeId: string) => void
  toggleSetting: (key: keyof Settings) => void
}
const initial: UserState = { loggedIn: false, email: undefined, subscribedDepts: [], savedNoticeIds: [], readNoticeIds: [], settings: { newNotice: true, pingVoice: true } }
export const usePingStore = create<UserState & Actions>()(
  persist(
    (set) => ({
      ...initial,
      login: (email) => set({ loggedIn: true, email }),
      logout: () => set({ ...initial }),
      subscribe: (dept) => set((s) => s.subscribedDepts.includes(dept) || s.subscribedDepts.length >= MAX_SUBSCRIPTIONS ? s : { subscribedDepts: [...s.subscribedDepts, dept] }),
      unsubscribe: (dept) => set((s) => ({ subscribedDepts: s.subscribedDepts.filter(d => d !== dept) })),
      toggleSave: (id) => set((s) => ({ savedNoticeIds: s.savedNoticeIds.includes(id) ? s.savedNoticeIds.filter(x => x !== id) : [...s.savedNoticeIds, id] })),
      markRead: (id) => set((s) => s.readNoticeIds.includes(id) ? s : ({ readNoticeIds: [...s.readNoticeIds, id] })),
      toggleSetting: (key) => set((s) => ({ settings: { ...s.settings, [key]: !s.settings[key] } })),
    }),
    { name: 'ping-store' },
  ),
)
