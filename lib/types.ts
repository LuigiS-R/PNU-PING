export type College = { id: string; name: string }
export type Department = { id: string; collegeId: string; name: string }

export type NoticeCategory = '장학' | '학사' | '행사' | '취업' | '일반'

export type Notice = {
  id: string
  deptId: string
  title: string
  body: string
  category: NoticeCategory
  publishedAt: string // ISO8601
  views: number
  isImportant: boolean
  sourceUrl?: string
}

export type Settings = { newNotice: boolean; importantOnly: boolean; pingVoice: boolean }

export type UserState = {
  loggedIn: boolean
  email?: string
  subscribedDeptIds: string[] // 최대 4
  savedNoticeIds: string[]
  readNoticeIds: string[]
  settings: Settings
}

export const MAX_SUBSCRIPTIONS = 4
