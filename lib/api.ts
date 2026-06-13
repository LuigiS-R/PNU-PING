import { Notice } from './types'

const API_BASE_URL = '/api'

export type BackendPost = {
  title: string
  body: string
  year: number
  month: string
  day: string
  hour: string
  minute: string
  department: string
}

function makeId(post: BackendPost): string {
  const str = `${post.department}|${post.title}|${post.year}${post.month}${post.day}${post.hour}${post.minute}`
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i)
    hash |= 0
  }
  return `post-${Math.abs(hash).toString(36)}`
}

function toNotice(post: BackendPost): Notice {
  return {
    id: makeId(post),
    title: post.title.replace(/}$/, '').trim(),
    body: post.body,
    department: post.department,
    publishedAt: `${post.year}-${post.month}-${post.day}T${post.hour}:${post.minute}:00+09:00`,
  }
}

export async function fetchNoticesByDept(department: string): Promise<Notice[]> {
  const res = await fetch(
    `${API_BASE_URL}/pnu-noti-system/feedloader/posts?department=${encodeURIComponent(department)}`
  )
  if (res.status === 404) return []
  if (!res.ok) throw new Error(`Failed to fetch notices for ${department}: ${res.status}`)
  const json: unknown = await res.json()
  if (!Array.isArray(json)) return []
  const data = json as BackendPost[]
  const seen = new Set<string>()
  return data
    .map(toNotice)
    .filter(n => { if (seen.has(n.id)) return false; seen.add(n.id); return true })
}
