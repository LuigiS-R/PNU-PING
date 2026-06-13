import { Notice } from './types'
export type FeedFilter = { depts?: string[] }
export function filterNotices(notices: Notice[], f: FeedFilter): Notice[] {
  return notices.filter(n => {
    if (f.depts && f.depts.length > 0 && !f.depts.includes(n.department)) return false
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
