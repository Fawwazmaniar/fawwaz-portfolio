import { render, screen } from '@testing-library/react'
import { CountUp } from './CountUp'

describe('CountUp', () => {
  it('formats the final value with separators and a suffix', () => {
    // jsdom has no IntersectionObserver, so the component shows the final number immediately.
    render(<CountUp to={10000} suffix="+" />)
    expect(screen.getAllByText('10,000+').length).toBeGreaterThan(0)
  })
})
