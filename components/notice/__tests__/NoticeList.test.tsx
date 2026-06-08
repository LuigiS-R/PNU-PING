import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { NoticeList } from '../NoticeList'
import { notices } from '@/lib/mock-data'

describe('NoticeList', () => {
  it('공지 개수만큼 카드(링크)를 렌더', () => {
    const subset = notices.slice(0, 3)
    render(<NoticeList notices={subset} now={Date.parse('2026-06-08T13:00:00+09:00')} />)
    expect(screen.getAllByRole('link')).toHaveLength(3)
  })
})
