import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { hero, person } from '../content'
import { HeroFacts } from './HeroFacts'
import { SocialLinks } from './SocialLinks'
import { button, container, display, eyebrow } from './ui'

/** Page-load entrance: slides in from (x, y) pixels away after `ms` (see .enter in index.css). */
const enter = (ms: number, x = 0, y = 0) => ({
  className: 'enter',
  style: { animationDelay: `${ms}ms`, '--enter-x': `${x}px`, '--enter-y': `${y}px` } as CSSProperties,
})

export function Hero() {
  const words = person.name.split(' ')
  return (
    <section aria-labelledby="hero-title" className="lime-zone bg-lime text-ink">
      <div className={`${container} pb-14 pt-8 sm:pb-20`}>
        <p {...enter(0, -60)} className={`enter ${eyebrow}`}>
          {person.jobTitle} · {person.location}
        </p>

        <div className="mt-8 grid items-end gap-10 xl:grid-cols-[1fr_auto]">
          <h1 id="hero-title" className={`text-[clamp(3.25rem,9.5vw,8.75rem)] ${display}`}>
            {/* Name words alternate in from left and right. */}
            {words.map((word, i) => (
              <span key={word} {...enter(100 + i * 120, i % 2 ? 160 : -160)} className="enter block">
                {word}
                {i === words.length - 1 && '.'}{' '}
              </span>
            ))}
          </h1>
          <div {...enter(500, 120, 0)} className="enter hidden xl:block">
            <HeroFacts />
          </div>
        </div>

        <div className="mt-12 grid gap-10 border-t border-ink pt-8 lg:grid-cols-2">
          <div {...enter(600, -80, 40)} className="enter">
            <p className="max-w-lg text-xl leading-snug">{hero.intro}</p>
            <p className={`mt-6 inline-flex items-center gap-2 border border-ink px-3 py-1.5 ${eyebrow}`}>
              <span aria-hidden="true" className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-ink opacity-50" />
                <span className="relative inline-flex size-2 rounded-full bg-ink" />
              </span>
              {hero.status}
            </p>
          </div>

          <div {...enter(700, 80, 40)} className="enter lg:text-right">
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link to="/#projects" className={button.primary}>
                View projects <span aria-hidden="true">↗</span>
              </Link>
              <a href={person.resumeUrl} download={person.resumeFilename} className={button.secondary}>
                Download resume
              </a>
              <Link to="/#contact" className={button.secondary}>Contact</Link>
            </div>
            <p className="mt-8 font-serif text-3xl italic leading-tight sm:text-4xl">{hero.positioning}</p>
            <div className="mt-6 lg:flex lg:justify-end">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
