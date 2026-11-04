import { hero } from '../content'
import { eyebrow } from './ui'

/** Short fact sheet beside the name. Wide screens only; the same facts are in the sections below. */
export function HeroFacts() {
  return (
    <dl className="hidden w-80 xl:block">
      {hero.facts.map((fact) => (
        <div key={fact.label} className="border-t border-ink py-4">
          <dt className={eyebrow}>{fact.label}</dt>
          <dd className="mt-1 text-2xl font-bold tracking-tight">{fact.value}</dd>
        </div>
      ))}
    </dl>
  )
}
