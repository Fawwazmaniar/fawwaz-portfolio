import { footer, person } from '../content'
import { Reveal } from './Reveal'
import { container, display } from './ui'

export function Footer() {
  return (
    <footer className="band-zone overflow-hidden bg-band pt-16 text-onband">
      <div className={container}>
        <p className="text-sm">
          © {new Date().getFullYear()} {person.name} · {footer.builtWith}
        </p>
      </div>
      {/* Decorative oversized wordmark, cropped by the viewport edge. */}
      <Reveal from="up">
        <p aria-hidden="true" className={`mt-6 select-none whitespace-nowrap px-4 text-[17vw] ${display}`}>
          {person.brand}
        </p>
      </Reveal>
    </footer>
  )
}
