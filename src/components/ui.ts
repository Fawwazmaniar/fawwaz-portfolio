const base =
  'inline-flex items-center justify-center gap-3 px-6 py-3.5 text-sm font-semibold transition-colors'

/** Shared class strings so links and buttons look identical. */
export const button = {
  /** For lime blocks. */
  primary: `${base} bg-ink text-paper hover:bg-inksoft`,
  /** For lime blocks. */
  secondary: `${base} border border-ink text-ink hover:bg-ink hover:text-paper`,
  /** For paper / dark-mode canvas. */
  plain: `${base} border border-fg text-fg hover:bg-fg hover:text-canvas`,
}

export const textLink = 'underline decoration-1 underline-offset-4 hover:opacity-70'

export const container = 'mx-auto w-full max-w-[84rem] px-5 sm:px-8'

/** Small uppercase mono label used above headings. */
export const eyebrow = 'font-mono text-xs uppercase tracking-widest'

/** Heavy, tight, uppercase display type. */
export const display = 'font-black uppercase leading-[0.84] tracking-[-0.055em]'
