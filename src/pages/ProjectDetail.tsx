import type { CSSProperties, ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ComingSoon } from '../components/ComingSoon'
import { Reveal, type From } from '../components/Reveal'
import { button, container, display, eyebrow, textLink } from '../components/ui'
import { person, projects } from '../content'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { NotFound } from './NotFound'

interface DetailProps {
  title: string
  empty: boolean
  from: From
  children: ReactNode
}

function DetailSection({ title, empty, from, children }: DetailProps) {
  return (
    <section>
      <Reveal from={from} className="grid gap-4 border-t-2 border-rule py-10 md:grid-cols-[14rem_1fr] md:gap-12">
        <h2 className={eyebrow}>{title}</h2>
        <div className="max-w-2xl">{empty ? <ComingSoon /> : children}</div>
      </Reveal>
    </section>
  )
}

function ProjectLink({ label, href }: { label: string; href: string }) {
  if (!href) return <span className="opacity-75">{label} link coming soon</span>
  return (
    <a href={href} className={textLink} rel="noopener noreferrer" target="_blank">
      {label} <span aria-hidden="true">↗</span>
    </a>
  )
}

const bullets = 'list-disc space-y-3 pl-5 text-lg marker:text-fg'

export function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  useDocumentTitle(project ? `${project.name} | ${person.name}` : `Not found | ${person.name}`)

  if (!project) return <NotFound />

  return (
    <article>
      <header className="lime-zone bg-lime text-ink">
        <div className={`${container} pb-14 pt-8 sm:pb-20`}>
          <Link to="/#projects" className={`${textLink} text-sm font-medium`}>← All projects</Link>
          <p className={`mt-12 ${eyebrow}`}>{project.status}</p>
          <h1 className={`enter mt-4 text-[clamp(3.5rem,13vw,11rem)] ${display}`} style={{ '--enter-x': '-140px' } as CSSProperties}>
            {project.name}
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-3xl italic leading-tight sm:text-4xl">{project.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm font-medium">
            <ProjectLink label="Live site" href={project.liveUrl} />
            <ProjectLink label="Repository" href={project.repoUrl} />
          </div>
        </div>
      </header>

      <div className={`${container} py-16 sm:py-24`}>
        <Reveal from="scale" className="mb-16">
          <section aria-label="Screenshots">
          {project.screenshots.length > 0 ? (
            <ul className="grid gap-4 sm:grid-cols-2">
              {project.screenshots.map((shot) => (
                <li key={shot.src}>
                  {/* Grayscale + multiply over lime turns any screenshot into a palette duotone. */}
                  <div className="isolate bg-lime">
                    <img
                      src={shot.src}
                      alt={shot.alt}
                      width={shot.width}
                      height={shot.height}
                      loading="lazy"
                      className="h-auto w-full mix-blend-multiply grayscale"
                    />
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className={`flex aspect-video items-center justify-center border-2 border-dashed border-muted text-muted ${eyebrow}`}>
              Screenshots coming soon
            </div>
          )}
          </section>
        </Reveal>

        <DetailSection from="left" title="The problem" empty={!project.problem}>
          <p className="text-2xl leading-snug">{project.problem}</p>
        </DetailSection>

        <DetailSection from="right" title="My approach" empty={project.approach.length === 0}>
          <ul className={bullets}>{project.approach.map((line) => <li key={line}>{line}</li>)}</ul>
        </DetailSection>

        <DetailSection from="left" title="Stack and why" empty={project.stack.length === 0}>
          <dl className="divide-y divide-line border-y border-line">
            {project.stack.map((s) => (
              <div key={s.name} className="flex flex-col gap-1 py-3 sm:flex-row sm:gap-6">
                <dt className="font-semibold sm:w-48 sm:shrink-0">{s.name}</dt>
                <dd className="text-muted">{s.role}</dd>
              </div>
            ))}
          </dl>
        </DetailSection>

        <DetailSection from="right" title="What I would do next" empty={project.next.length === 0}>
          <ul className={bullets}>{project.next.map((line) => <li key={line}>{line}</li>)}</ul>
        </DetailSection>

        <DetailSection from="left" title="What I learned" empty={project.learned.length === 0}>
          <ul className={bullets}>{project.learned.map((line) => <li key={line}>{line}</li>)}</ul>
        </DetailSection>

        <Link to="/#projects" className={`${button.plain} mt-12`}>← Back to projects</Link>
      </div>
    </article>
  )
}
