import { act, render, screen } from '@testing-library/react'
import { afterEach, vi } from 'vitest'
import { CountUp } from './CountUp'

afterEach(() => {
  vi.unstubAllGlobals()
})

/** Pretend the browser supports scroll observers and the user allows motion. */
function stubMotionAllowed() {
  let reveal = () => {}
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      constructor(callback: (entries: { isIntersecting: boolean }[]) => void) {
        reveal = () => callback([{ isIntersecting: true }])
      }
      observe() {}
      disconnect() {}
    },
  )
  vi.stubGlobal('matchMedia', () => ({ matches: false }))
  vi.stubGlobal('requestAnimationFrame', () => 0) // freeze the animation at its first frame
  return () => act(reveal)
}

describe('CountUp', () => {
  it('renders the formatted final value on first render', () => {
    // jsdom has no IntersectionObserver, so nothing animates and only the real text is shown.
    render(<CountUp to={13000} suffix="+" />)
    expect(screen.getByText('13,000+')).toBeInTheDocument()
  })

  it('has no stray zero in the page text before the count starts', () => {
    stubMotionAllowed()
    const { container } = render(<CountUp to={9} suffix="+" />)
    // What a crawler reads: only the real value.
    expect(container).toHaveTextContent(/^9\+$/)
  })

  it('counts up on an aria-hidden overlay while the real value stays in the DOM', () => {
    const scrollIntoView = stubMotionAllowed()
    const { container } = render(<CountUp to={9} suffix="+" />)

    scrollIntoView()

    expect(screen.getByText('9+')).toBeInTheDocument() // real text is still there for screen readers
    expect(container.querySelector('[aria-hidden="true"]')).toHaveTextContent('0+')
  })

  it('does not animate for visitors who prefer reduced motion', () => {
    stubMotionAllowed()
    vi.stubGlobal('matchMedia', () => ({ matches: true }))
    const { container } = render(<CountUp to={9} suffix="+" />)
    expect(container).toHaveTextContent(/^9\+$/)
  })
})
