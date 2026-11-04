import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { nav } from '../content'
import { Header } from './Header'

// Render inside a router because the header uses <Link>.
const setup = () =>
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  )

describe('Header navigation', () => {
  it('renders a labelled nav landmark with a link per section', () => {
    setup()
    const primary = screen.getByRole('navigation', { name: 'Primary' })
    expect(primary).toBeInTheDocument()
    // Query by role + name, the way a screen-reader user would find them.
    for (const item of nav) {
      expect(screen.getByRole('link', { name: item.label })).toHaveAttribute('href', `/#${item.id}`)
    }
  })

  it('toggles the mobile menu and closes it with Escape', async () => {
    const user = userEvent.setup()
    setup()
    const menu = screen.getByRole('button', { name: 'Menu' })
    expect(menu).toHaveAttribute('aria-expanded', 'false')

    await user.click(menu)
    expect(menu).toHaveAttribute('aria-expanded', 'true')

    await user.keyboard('{Escape}')
    expect(menu).toHaveAttribute('aria-expanded', 'false')
  })
})
