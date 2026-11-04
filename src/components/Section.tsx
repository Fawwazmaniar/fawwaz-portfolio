import type { ReactNode } from 'react'
import { nav } from '../content'
import { Reveal } from './Reveal'
import { container, display, eyebrow } from './ui'

interface Props {
  id: string
  /** "lime" paints the whole block lime for contrast and rhythm. */
  tone?: 'default' | 'lime'
  children: ReactNode
}

export function Section({ id, tone = 'default', children }: Props) {
  const index = nav.findIndex((item) => item.id === id)
  const { label, heading } = nav[index]
  const lime = tone === 'lime'

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`scroll-mt-16 border-t py-20 sm:py-32 ${
        lime ? 'lime-zone border-ink bg-lime text-ink' : 'border-rule'
      }`}
    >
      <div className={container}>
        <div className="mb-14 grid gap-6 md:grid-cols-[14rem_1fr] md:gap-12">
          <Reveal from="left">
            <p className={eyebrow}>
              {String(index + 1).padStart(2, '0')} / {label}
            </p>
          </Reveal>
          <Reveal from="right">
            <h2 id={`${id}-title`} className={`text-6xl sm:text-8xl ${display}`}>
              {heading.lead}{' '}
              <span className="block font-serif text-[1.05em] font-normal normal-case italic leading-[0.95] tracking-tight">
                {heading.accent}
              </span>
            </h2>
          </Reveal>
        </div>
        {children}
      </div>
    </section>
  )
}
