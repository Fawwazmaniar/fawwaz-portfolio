import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ticker } from '../content'
import { Ticker } from './Ticker'

describe('Ticker', () => {
  it('lists each technology once for assistive tech (the looping copy is hidden)', () => {
    render(<Ticker />)
    // getAllByText ignores nothing, so count only what the accessibility tree exposes.
    expect(screen.getAllByRole('listitem')).toHaveLength(ticker.length)
  })

  it('has a pause control, because moving content must be stoppable (WCAG 2.2.2)', async () => {
    const user = userEvent.setup()
    render(<Ticker />)
    const button = screen.getByRole('button', { name: 'Pause animation' })
    expect(button).toHaveAttribute('aria-pressed', 'false')

    await user.click(button)
    expect(screen.getByRole('button', { name: 'Play animation' })).toHaveAttribute('aria-pressed', 'true')
  })
})
