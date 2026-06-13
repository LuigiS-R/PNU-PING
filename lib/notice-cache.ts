import { Notice } from './types'

const cache = new Map<string, Notice>()

export function cacheNotices(notices: Notice[]) {
  notices.forEach(n => cache.set(n.id, n))
}

export function getCachedNotice(id: string): Notice | undefined {
  return cache.get(id)
}
