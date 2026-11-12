import { render, screen } from '@testing-library/react'
import { afterEach, vi } from 'vitest'
import { CountUp } from './CountUp'

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('CountUp', () => {
  it('renders the formatted final value on first render', () => {
    // jsdom has no IntersectionObserver, so nothing animates and only the real text is shown.
    render(<CountUp to={13000} suffix="+" />)
    expect(screen.getByText('13,000+')).toBeInTheDocument()
  })

  it('keeps the real value in the DOM while the count-up is waiting to start', () => {
    // Pretend the browser supports scroll observers and the user allows motion.
    vi.stubGlobal('IntersectionObserver', class { observe() {} disconnect() {} })
    vi.stubGlobal('matchMedia', () => ({ matches: false }))

    const { container } = render(<CountUp to={9} suffix="+" />)

    // The real text is still there for crawlers and screen readers (only made transparent)...
    expect(screen.getByText('9+')).toBeInTheDocument()
    // ...and the visible overlay starts at zero, hidden from assistive tech.
    expect(container.querySelector('[aria-hidden="true"]')).toHaveTextContent('0+')
  })
})
