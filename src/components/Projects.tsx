import { projects } from '../content'
import { ProjectCard } from './ProjectCard'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Projects() {
  return (
    <Section id="projects">
      <ul className="grid gap-x-8 gap-y-20 md:grid-cols-2">
        {projects.map((project, i) => (
          <li key={project.slug}>
            <Reveal from={i % 2 ? 'right' : 'left'}>
              <ProjectCard project={project} index={i + 1} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
