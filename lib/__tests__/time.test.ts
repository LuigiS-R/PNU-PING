import { describe, it, expect } from 'vitest'
import { isNew, relativeTime } from '@/lib/time'
const NOW = new Date('2026-06-08T13:00:00+09:00').getTime()
describe('isNew', () => {
  it('24시간 이내면 new', () => { expect(isNew('2026-06-08T08:00:00+09:00', NOW)).toBe(true) })
  it('24시간 초과면 not new', () => { expect(isNew('2026-06-06T08:00:00+09:00', NOW)).toBe(false) })
  it('정확히 24h 경계 → false', () => { expect(isNew(new Date(NOW - 86400000).toISOString(), NOW)).toBe(false) })
  it('24h - 1s → true', () => { expect(isNew(new Date(NOW - 86400000 + 1000).toISOString(), NOW)).toBe(true) })
})
describe('relativeTime', () => {
  it('1시간 전', () => { expect(relativeTime('2026-06-08T12:00:00+09:00', NOW)).toBe('1시간 전') })
  it('오늘(분)', () => { expect(relativeTime('2026-06-08T12:30:00+09:00', NOW)).toBe('30분 전') })
  it('어제', () => { expect(relativeTime('2026-06-07T12:00:00+09:00', NOW)).toBe('어제') })
  it('N일 전', () => { expect(relativeTime('2026-06-05T12:00:00+09:00', NOW)).toBe('3일 전') })
  it('미래 타임스탬프는 방금', () => { expect(relativeTime(new Date(NOW + 60000).toISOString(), NOW)).toBe('방금') })
})
