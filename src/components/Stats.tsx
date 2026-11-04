import { hero } from '../content'
import { CountUp } from './CountUp'
import { Reveal, type From } from './Reveal'
import { container, eyebrow } from './ui'

const entrances: From[] = ['left', 'down', 'up', 'right']

export function Stats() {
  return (
    <section aria-label="At a glance" className={`${container} py-16 sm:py-24`}>
      <dl className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
        {hero.stats.map((stat, i) => (
          <Reveal key={stat.label} from={entrances[i]} delay={i * 100} className="border-t-2 border-rule pr-6 pt-4">
            <dd className="text-6xl font-black tracking-[-0.06em] sm:text-7xl">
              <CountUp to={stat.value} suffix={stat.suffix} />
            </dd>
            <dt className={`mt-3 ${eyebrow}`}>{stat.label}</dt>
          </Reveal>
        ))}
      </dl>
    </section>
  )
}
