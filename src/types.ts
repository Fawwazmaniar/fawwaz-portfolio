export interface NavItem {
  id: string
  label: string
  /** Section heading: bold `lead` plus a serif-italic `accent` word. */
  heading: { lead: string; accent: string }
}

export interface Job {
  role: string
  company: string
  location: string
  period: string
  bullets: string[]
}

export interface SkillGroup {
  title: string
  items: string[]
  note?: string
}

export interface StackItem {
  name: string
  role: string
}

/** One left-to-right stage of a project's architecture diagram. */
export interface DiagramColumn {
  label: string
  nodes: string[]
}

export interface Project {
  slug: string
  name: string
  tagline: string
  status: string
  summary: string
  /** Leave empty until the link exists; the page shows a "coming soon" state. */
  liveUrl: string
  repoUrl: string
  /** Architecture diagram shown on the card, left to right. Empty shows "Diagram coming soon". */
  diagram: DiagramColumn[]
  /** Detail view sections. Empty means "coming soon". */
  problem: string
  approach: string[]
  stack: StackItem[]
  next: string[]
  learned: string[]
  /** Optional: shown on the detail page only when present. */
  keyDecisions?: string[]
  tradeoffs?: string
}

export interface Education {
  title: string
  school: string
  period: string
  note?: string
}
