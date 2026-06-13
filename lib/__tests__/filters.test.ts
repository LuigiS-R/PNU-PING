import { describe, it, expect } from 'vitest'
import { filterNotices, searchNotices, sortByDateDesc } from '@/lib/filters'
import { Notice } from '@/lib/types'

const N = (over: Partial<Notice>): Notice => ({
  id: 'x', department: '컴퓨터공학과', title: '제목', body: '본문',
  publishedAt: '2026-06-08T08:00:00+09:00', ...over,
})

const data: Notice[] = [
  N({ id: 'a', department: '컴퓨터공학과', title: '장학금 안내', publishedAt: '2026-06-08T12:00:00+09:00' }),
  N({ id: 'b', department: '의류학과', title: '전시회 안내', publishedAt: '2026-06-07T12:00:00+09:00' }),
  N({ id: 'c', department: '기계공학과', title: '수강신청 일정', publishedAt: '2026-06-06T12:00:00+09:00' }),
]

describe('filterNotices', () => {
  it('학과로 필터', () => {
    expect(filterNotices(data, { depts: ['컴퓨터공학과'] }).map(n => n.id)).toEqual(['a'])
  })
  it('복수 학과(구독 피드)', () => {
    expect(filterNotices(data, { depts: ['컴퓨터공학과', '의류학과'] }).map(n => n.id).sort()).toEqual(['a', 'b'])
  })
  it('depts 빈 배열 또는 미지정이면 전체', () => {
    expect(filterNotices(data, {}).length).toBe(3)
    expect(filterNotices(data, { depts: [] }).length).toBe(3)
  })
})

describe('searchNotices', () => {
  it('제목 부분일치(공백 무시 대소문자 무시)', () => {
    expect(searchNotices(data, '장학').map(n => n.id)).toEqual(['a'])
  })
  it('빈 쿼리는 전체', () => {
    expect(searchNotices(data, '   ').length).toBe(3)
  })
})

describe('sort', () => {
  it('최신순', () => {
    expect(sortByDateDesc(data).map(n => n.id)).toEqual(['a', 'b', 'c'])
  })
})
