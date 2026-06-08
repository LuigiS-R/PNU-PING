import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Button } from '../Button'
import { Toggle } from '../Toggle'

describe('ui', () => {
  it('Button 텍스트', () => {
    render(<Button>저장</Button>)
    expect(screen.getByText('저장')).toBeInTheDocument()
  })
  it('Toggle aria-pressed', () => {
    render(<Toggle on />)
    expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'true')
  })
})
