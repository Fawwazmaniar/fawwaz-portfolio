import { about } from '../content'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function About() {
  const [lead, ...rest] = about
  return (
    <Section id="about">
      <div className="max-w-3xl md:ml-[17rem]">
        <Reveal from="left">
          <p className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">{lead}</p>
        </Reveal>
        <div className="mt-10 space-y-5 text-xl leading-relaxed text-muted">
          {rest.map((paragraph, i) => (
            <Reveal key={paragraph} from={i % 2 ? 'left' : 'right'}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
