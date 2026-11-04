import { person } from '../content'
import { textLink } from './ui'

/** Each link renders only when its URL is set; otherwise a visible placeholder. */
function Item({ label, href }: { label: string; href: string }) {
  if (!href) return <span className="opacity-75">{label} (coming soon)</span>
  return (
    <a href={href} className={textLink} rel="noopener noreferrer" target="_blank">
      {label}
    </a>
  )
}

export function SocialLinks() {
  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
      <li><Item label="GitHub" href={person.github} /></li>
      <li><Item label="LinkedIn" href={person.linkedin} /></li>
      <li><Item label="Email" href={`mailto:${person.email}`} /></li>
    </ul>
  )
}
