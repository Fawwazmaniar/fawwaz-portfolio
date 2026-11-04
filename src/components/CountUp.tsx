import { useEffect, useRef, useState } from 'react'
import { canAnimateOnScroll } from '../lib/motion'

interface Props {
  to: number
  suffix?: string
}

/** Counts up to `to` once visible. Screen readers get the final value only. */
export function CountUp({ to, suffix = '' }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(() => (canAnimateOnScroll() ? 0 : to))

  useEffect(() => {
    if (!canAnimateOnScroll() || !ref.current) return
    let frame = 0
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min((now - start) / 1200, 1)
        setValue(Math.round(to * (1 - (1 - t) ** 3))) // ease-out
        if (t < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    })
    observer.observe(ref.current)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [to])

  const format = (n: number) => `${n.toLocaleString('en-US')}${suffix}`
  return (
    <span ref={ref}>
      <span aria-hidden="true">{format(value)}</span>
      <span className="sr-only">{format(to)}</span>
    </span>
  )
}
