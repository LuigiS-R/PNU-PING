export type College = { id: string; name: string }
export type Department = { id: string; collegeId: string; name: string }

export type Notice = {
  id: string
  department: string   // display name from backend, e.g. "컴퓨터공학과"
  title: string
  body: string
  publishedAt: string  // ISO8601
  sourceUrl?: string
}

export type Settings = { newNotice: boolean; pingVoice: boolean }

export type UserState = {
  loggedIn: boolean
  email?: string
  subscribedDepts: string[]   // department display names, max 4
  savedNoticeIds: string[]
  readNoticeIds: string[]
  settings: Settings
}

export const MAX_SUBSCRIPTIONS = 4
