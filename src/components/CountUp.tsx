import { useEffect, useRef } from 'react'
import { canAnimateOnScroll } from '../lib/motion'

interface Props {
  to: number
  suffix?: string
}

const format = (n: number, suffix: string) => `${n.toLocaleString('en-US')}${suffix}`

/**
 * Always renders the real final value as text, so crawlers and screen readers see it.
 * Once the number is about to scroll into view, and only if motion is welcome, it counts up
 * from 0 over an aria-hidden overlay while the real text stays in the DOM (just transparent).
 * Until then the overlay is empty, so the page text never contains a stray "0".
 * The overlay is updated through refs, so the animation doesn't re-render React every frame.
 */
export function CountUp({ to, suffix = '' }: Props) {
  const rootRef = useRef<HTMLSpanElement>(null)
  const realRef = useRef<HTMLSpanElement>(null)
  const overlayRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const root = rootRef.current
    const real = realRef.current
    const overlay = overlayRef.current
    if (!root || !real || !overlay || !canAnimateOnScroll()) return

    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        // Swap in the overlay just before the number is visible.
        real.style.opacity = '0'
        overlay.textContent = format(0, suffix)
        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min((now - start) / 1200, 1)
          overlay.textContent = format(Math.round(to * (1 - (1 - t) ** 3)), suffix) // ease-out
          if (t < 1) {
            frame = requestAnimationFrame(tick)
          } else {
            real.style.opacity = ''
            overlay.textContent = ''
          }
        }
        frame = requestAnimationFrame(tick)
      },
      { rootMargin: '0px 0px 120px 0px' },
    )
    observer.observe(root)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
      real.style.opacity = ''
      overlay.textContent = ''
    }
  }, [to, suffix])

  return (
    <span ref={rootRef} className="relative inline-block">
      <span ref={realRef}>{format(to, suffix)}</span>
      <span ref={overlayRef} aria-hidden="true" className="absolute inset-0" />
    </span>
  )
}
