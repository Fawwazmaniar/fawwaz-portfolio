import { experience } from '../content'
import { Reveal } from './Reveal'
import { Section } from './Section'
import { eyebrow } from './ui'

export function Experience() {
  return (
    <Section id="experience">
      <ol className="space-y-20">
        {experience.map((job) => (
          <li key={job.company} className="grid gap-6 border-t-2 border-rule pt-6 md:grid-cols-[16rem_1fr] md:gap-12">
            {/* Stays pinned while you read the bullets on wide screens. */}
            <Reveal from="left" className="self-start md:sticky md:top-24">
              <h3 className="text-3xl font-bold leading-tight tracking-tight">{job.role}</h3>
              <p className="mt-3 text-lg font-medium">{job.company}</p>
              <p className="text-muted">{job.location}</p>
              <p className={`mt-4 inline-block border border-rule px-3 py-1.5 ${eyebrow}`}>{job.period}</p>
            </Reveal>
            <ul className="list-disc space-y-4 pl-5 text-lg leading-relaxed marker:text-fg">
              {job.bullets.map((bullet, i) => (
                <li key={bullet}>
                  {/* Bullets alternate sides so the list weaves in. */}
                  <Reveal from={i % 2 ? 'left' : 'right'}>{bullet}</Reveal>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
