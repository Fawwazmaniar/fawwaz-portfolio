import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { projects } from '../content'
import type { Project } from '../types'
import { ProjectCard } from './ProjectCard'

const renderCard = (project: Project) => {
  render(
    <MemoryRouter>
      <ProjectCard project={project} index={1} />
    </MemoryRouter>,
  )
}

describe('ProjectCard', () => {
  it('links to the project detail page and lists its stack', () => {
    const project = projects.find((p) => p.slug === 'plateau')!
    renderCard(project)
    expect(screen.getByRole('link', { name: project.name })).toHaveAttribute('href', '/projects/plateau')
    expect(screen.getByRole('list', { name: 'Stack' })).toHaveTextContent('Zustand')
  })

  it('shows coming-soon states instead of inventing a stack or diagram', () => {
    // A project with no stack or diagram yet, like a freshly added entry.
    renderCard({ ...projects[0], stack: [], diagram: [] })
    expect(screen.getByText('Stack details coming soon')).toBeInTheDocument()
    expect(screen.getByText('Diagram coming soon')).toBeInTheDocument()
    expect(screen.queryByRole('list', { name: 'Stack' })).not.toBeInTheDocument()
  })
})
