const HOUR = 3600_000, DAY = 86_400_000
export function isNew(publishedAt: string, now: number = Date.now()): boolean {
  return now - new Date(publishedAt).getTime() < DAY
}
export function relativeTime(publishedAt: string, now: number = Date.now()): string {
  const diff = now - new Date(publishedAt).getTime()
  if (diff <= 0) return '방금'
  if (diff < HOUR) return `${Math.max(1, Math.floor(diff / 60000))}분 전`
  if (diff < DAY) return `${Math.floor(diff / HOUR)}시간 전`
  const days = Math.floor(diff / DAY)
  if (days === 1) return '어제'
  return `${days}일 전`
}
