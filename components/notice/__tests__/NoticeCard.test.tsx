import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { NoticeCard } from '../NoticeCard'
import { notices } from '@/lib/mock-data'

describe('NoticeCard', () => {
  it('제목 렌더 + 상세 링크', () => {
    render(<NoticeCard notice={notices[0]} now={Date.parse('2026-06-08T13:00:00+09:00')} isRead={false} />)
    expect(screen.getByText(notices[0].title)).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', `/n/${notices[0].id}`)
  })
})
