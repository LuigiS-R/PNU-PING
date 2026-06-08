import { describe, it, expect } from 'vitest'
import { filterNotices, searchNotices, sortByDateDesc, importantFirst } from '@/lib/filters'
import { Notice } from '@/lib/types'
const N = (over: Partial<Notice>): Notice => ({ id: 'x', deptId: 'cse', title: '제목', body: '본문', category: '학사', publishedAt: '2026-06-08T08:00:00+09:00', views: 0, isImportant: false, ...over })
const data: Notice[] = [
  N({ id: 'a', deptId: 'cse', category: '장학', title: '장학금 안내', publishedAt: '2026-06-08T12:00:00+09:00', isImportant: true }),
  N({ id: 'b', deptId: 'cloth', category: '행사', title: '전시회 안내', publishedAt: '2026-06-07T12:00:00+09:00' }),
  N({ id: 'c', deptId: 'me', category: '학사', title: '수강신청 일정', publishedAt: '2026-06-06T12:00:00+09:00' }),
]
describe('filterNotices', () => {
  it('학과로 필터', () => { expect(filterNotices(data, { deptIds: ['cse'] }).map(n => n.id)).toEqual(['a']) })
  it('복수 학과(구독 피드)', () => { expect(filterNotices(data, { deptIds: ['cse', 'cloth'] }).map(n => n.id).sort()).toEqual(['a', 'b']) })
  it('카테고리로 필터', () => { expect(filterNotices(data, { category: '행사' }).map(n => n.id)).toEqual(['b']) })
  it('deptIds 빈 배열 또는 미지정이면 전체', () => { expect(filterNotices(data, {}).length).toBe(3); expect(filterNotices(data, { deptIds: [] }).length).toBe(3) })
})
describe('searchNotices', () => {
  it('제목 부분일치(공백 무시 대소문자 무시)', () => { expect(searchNotices(data, '장학').map(n => n.id)).toEqual(['a']) })
  it('빈 쿼리는 전체', () => { expect(searchNotices(data, '   ').length).toBe(3) })
})
describe('sort', () => {
  it('최신순', () => { expect(sortByDateDesc(data).map(n => n.id)).toEqual(['a', 'b', 'c']) })
  it('중요 우선 후 최신순', () => { expect(importantFirst(data).map(n => n.id)).toEqual(['a', 'b', 'c']) })
  it('중요 공지끼리는 날짜 내림차순', () => {
    const items: Notice[] = [
      N({ id: 'normal', isImportant: false, publishedAt: '2026-06-08T10:00:00+09:00' }),
      N({ id: 'imp-old', isImportant: true, publishedAt: '2026-06-07T10:00:00+09:00' }),
      N({ id: 'imp-new', isImportant: true, publishedAt: '2026-06-08T10:00:00+09:00' }),
    ]
    expect(importantFirst(items).map(n => n.id)).toEqual(['imp-new', 'imp-old', 'normal'])
  })
})
