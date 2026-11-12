import { coursework, education } from '../content'
import { chip } from './Skills'
import { Reveal } from './Reveal'
import { Section } from './Section'
import { eyebrow } from './ui'

export function Education() {
  return (
    <Section id="education">
      <ul>
        {education.map((item, i) => (
          <li key={item.title}>
            {/* Indented to line up with the content column used by the other sections. */}
            <Reveal from={i % 2 ? 'right' : 'left'} className="border-t-2 border-rule py-6 md:pl-[17rem]">
              <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
              <p className="text-muted">
                {item.school}
                {item.note && ` · ${item.note}`}
              </p>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal from="up" className="grid gap-4 border-t-2 border-rule pt-6 md:grid-cols-[14rem_1fr] md:gap-12">
        <h3 className={eyebrow}>Relevant coursework</h3>
        <ul className="flex flex-wrap gap-2">
          {coursework.map((course) => (
            <li key={course} className={chip}>{course}</li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
