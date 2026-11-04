import { Link } from 'react-router-dom'
import type { Project } from '../types'
import { Diagram } from './Diagram'
import { chip } from './Skills'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group relative">
      <div className="relative flex min-h-72 items-center overflow-hidden bg-lime p-6 pb-20 sm:min-h-80 sm:p-8 sm:pb-20">
        <Diagram columns={project.diagram} />
        <span
          aria-hidden="true"
          className="absolute bottom-0 right-0 flex size-14 items-center justify-center bg-ink text-2xl text-paper transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
        >
          ↗
        </span>
      </div>

      <div className="mt-5 flex gap-6 border-t-2 border-rule pt-5">
        <span aria-hidden="true" className="font-mono text-sm">{String(index).padStart(2, '0')}</span>
        <div>
          <h3 className="text-4xl font-black tracking-[-0.04em]">
            {/* The stretched ::after makes the whole card clickable with one real link. */}
            <Link to={`/projects/${project.slug}`} className="after:absolute after:inset-0">
              {project.name}
            </Link>
          </h3>
          <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted">{project.status}</p>
          <p className="mt-4 max-w-md text-muted">{project.summary}</p>

          {project.stack.length > 0 ? (
            <ul aria-label="Stack" className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <li key={s.name} className={`${chip} text-xs`}>{s.name}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-5 text-sm italic text-muted">Stack details coming soon</p>
          )}
        </div>
      </div>
    </article>
  )
}
