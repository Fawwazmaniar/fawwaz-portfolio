import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { nav, person } from '../content'
import { useActiveSection } from '../hooks/useActiveSection'
import { container } from './ui'

const sectionIds = nav.map((item) => item.id)

export function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const active = useActiveSection(sectionIds, pathname === '/')

  // Escape closes the mobile menu.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="lime-zone sticky top-0 z-40 border-b border-ink bg-lime text-ink">
      <div className={`${container} flex h-16 items-center justify-between`}>
        <Link to="/" className="text-3xl font-black tracking-[-0.06em]">
          {person.brand}
        </Link>

        <div className="flex items-center gap-2">
          <nav aria-label="Primary">
            <ul
              id="primary-nav"
              className={`${open ? 'flex' : 'hidden'} absolute inset-x-0 top-16 flex-col border-b border-ink bg-lime px-5 py-3 md:static md:flex md:flex-row md:gap-1 md:border-0 md:p-0`}
            >
              {nav.map((item) => (
                <li key={item.id}>
                  <Link
                    to={`/#${item.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === item.id ? 'true' : undefined}
                    className="block px-3 py-3 text-sm font-medium hover:underline hover:underline-offset-8 aria-[current=true]:underline aria-[current=true]:decoration-2 aria-[current=true]:underline-offset-8 md:py-2"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-10 items-center border border-ink px-3 text-sm font-medium hover:bg-ink hover:text-paper md:hidden"
          >
            Menu
          </button>
        </div>
      </div>
    </header>
  )
}
