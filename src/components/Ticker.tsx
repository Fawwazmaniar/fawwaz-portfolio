import { useState } from 'react'
import { ticker } from '../content'
import { display } from './ui'

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden}
      className={`flex shrink-0 items-center gap-8 pr-8 ${hidden ? 'motion-reduce:hidden' : 'motion-reduce:flex-wrap'}`}
    >
      {ticker.map((name, i) => (
        <li key={name} className="flex items-center gap-8">
          {/* Alternate filled and outlined words for rhythm. */}
          <span
            className={`text-5xl sm:text-7xl ${display} ${
              i % 2 ? 'text-transparent [-webkit-text-stroke:1.5px_var(--on-band)]' : ''
            }`}
          >
            {name}
          </span>
          <span aria-hidden="true" className="text-3xl">✦</span>
        </li>
      ))}
    </ul>
  )
}

/** Endless band of core technologies. Includes a pause control (WCAG 2.2.2). */
export function Ticker() {
  const [paused, setPaused] = useState(false)
  return (
    <section aria-label="Core technologies" className="band-zone relative overflow-hidden bg-band py-10 text-onband">
      <div
        className="flex w-max animate-marquee motion-reduce:w-auto"
        style={{ animationPlayState: paused ? 'paused' : 'running' }}
      >
        <Row />
        <Row hidden />
      </div>
      <button
        type="button"
        aria-pressed={paused}
        onClick={() => setPaused((p) => !p)}
        className="absolute right-4 top-3 z-10 border border-onband bg-band px-2 py-1 font-mono text-[10px] uppercase tracking-widest motion-reduce:hidden"
      >
        {paused ? 'Play' : 'Pause'} animation
      </button>
    </section>
  )
}
