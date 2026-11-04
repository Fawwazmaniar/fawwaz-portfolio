import { useEffect, useRef, useState, type ReactNode } from 'react'
import { canAnimateOnScroll } from '../lib/motion'

export type From = 'up' | 'down' | 'left' | 'right' | 'scale'

// Where the content starts before it slides or scales into place.
const start: Record<From, string> = {
  up: 'translate-y-14',
  down: '-translate-y-14',
  left: '-translate-x-24',
  right: 'translate-x-24',
  scale: 'scale-90',
}

interface Props {
  children: ReactNode
  className?: string
  from?: From
  /** Milliseconds to wait before starting, for staggering neighbours. */
  delay?: number
}

/** Fades content in from the given direction the first time it scrolls into view. */
export function Reveal({ children, className = '', from = 'up', delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  // Without IntersectionObserver or with reduced motion, content is simply visible.
  const [shown, setShown] = useState(() => !canAnimateOnScroll())

  useEffect(() => {
    if (shown || !ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShown(true)
      },
      { threshold: 0.12 },
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [shown])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${className} transition duration-700 ease-out ${shown ? '' : `${start[from]} opacity-0`}`}
    >
      {children}
    </div>
  )
}
