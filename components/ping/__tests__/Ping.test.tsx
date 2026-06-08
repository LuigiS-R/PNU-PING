import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Ping } from '../Ping'

describe('Ping', () => {
  it('표정별 렌더', () => {
    const { container } = render(<Ping expression="celebrate" />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})
