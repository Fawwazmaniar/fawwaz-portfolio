import { render, screen, within } from '@testing-library/react'
import { Diagram } from './Diagram'

describe('Diagram', () => {
  it('lists each stage and its nodes in order, hiding the decorative arrows', () => {
    render(
      <Diagram
        columns={[
          { label: 'Client', nodes: ['React'] },
          { label: 'Backend', nodes: ['Supabase', 'Postgres'] },
        ]}
      />,
    )
    const diagram = screen.getByRole('list', { name: 'How it fits together' })
    expect(within(diagram).getByText('Client')).toBeInTheDocument()
    expect(within(diagram).getByText('Postgres')).toBeInTheDocument()
    // Arrows are aria-hidden, so a screen reader hears only the two real stages.
    expect(within(diagram).getAllByRole('list')).toHaveLength(2)
  })
})
