import { Notice, NoticeCategory } from './types'
export type FeedFilter = { deptIds?: string[]; category?: NoticeCategory }
export function filterNotices(notices: Notice[], f: FeedFilter): Notice[] {
  return notices.filter(n => {
    if (f.deptIds && f.deptIds.length > 0 && !f.deptIds.includes(n.deptId)) return false
    if (f.category && n.category !== f.category) return false
    return true
  })
}
const norm = (s: string) => s.toLowerCase().replace(/\s+/g, '')
export function searchNotices(notices: Notice[], query: string): Notice[] {
  const q = norm(query)
  if (!q) return notices
  return notices.filter(n => norm(n.title).includes(q) || norm(n.body).includes(q))
}
export function sortByDateDesc(notices: Notice[]): Notice[] {
  return [...notices].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}
export function importantFirst(notices: Notice[]): Notice[] {
  return [...notices].sort((a, b) => {
    if (a.isImportant !== b.isImportant) return a.isImportant ? -1 : 1
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  })
}
