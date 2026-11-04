import { skills } from '../content'
import { Reveal, type From } from './Reveal'
import { Section } from './Section'

export const chip =
  'border border-rule px-3 py-1.5 text-sm transition-colors hover:bg-lime hover:text-ink'

const entrances: From[] = ['left', 'up', 'right']

export function Skills() {
  return (
    <Section id="skills">
      <div className="grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal
            key={group.title}
            from={entrances[i % entrances.length]}
            delay={(i % 3) * 120}
            className="border-t-2 border-rule pt-4"
          >
            <h3 className="text-2xl font-bold tracking-tight">{group.title}</h3>
            {group.note && <p className="mt-2 text-sm text-muted">{group.note}</p>}
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className={chip}>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
