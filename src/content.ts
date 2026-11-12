/**
 * ALL copy and data for the site lives here. Edit this file; components just render it.
 * Empty strings / empty arrays render a visible "Coming soon" state, never a fake value.
 */
import type { Education, Job, NavItem, Project, SkillGroup } from './types.ts'

export const site = {
  // Used for the canonical link, Open Graph, sitemap and structured data.
  url: 'https://www.fawwazmaniar.dev',
  title: 'Mohammed Fawwaz Maniar | Senior Front End Developer',
  description:
    'Senior front end developer in Markham, Ontario. 9 years of software development in React, TypeScript and Angular, building data-rich enterprise products used by 13,000+ users. Open to senior front-end and full-stack roles.',
}

export const person = {
  name: 'Mohammed Fawwaz Maniar',
  brand: 'Fawwaz.',
  jobTitle: 'Senior Front End Developer',
  location: 'Markham, Ontario, Canada',
  email: 'fawwazmaniar@gmail.com',
  // An empty profile URL renders as "coming soon".
  github: 'https://github.com/Fawwazmaniar',
  linkedin: 'https://www.linkedin.com/in/fawwaz-maniar-899a2aa6/',
  resumeUrl: '/resume.pdf', // the file lives at public/resume.pdf
  resumeFilename: 'Mohammed-Fawwaz-Maniar-Resume.pdf', // name the visitor's download gets
}

export const nav: NavItem[] = [
  { id: 'about', label: 'About', heading: { lead: 'How I', accent: 'work.' } },
  { id: 'skills', label: 'Skills', heading: { lead: 'What I', accent: 'use.' } },
  { id: 'experience', label: 'Experience', heading: { lead: "Where I've", accent: 'worked.' } },
  { id: 'projects', label: 'Projects', heading: { lead: "Things I've been", accent: 'building this year.' } },
  { id: 'education', label: 'Education', heading: { lead: 'Where I', accent: 'studied.' } },
  { id: 'contact', label: 'Contact', heading: { lead: "Let's", accent: 'talk.' } },
]

export const hero = {
  status: 'Open to senior front-end and full-stack roles',
  positioning: 'Senior front end developer working in React, TypeScript and Angular.',
  intro:
    'I own features end to end, lead legacy-to-modern migrations, and mentor other developers. I have 9 years of experience, currently at Jonas Software.',
  facts: [
    { label: 'Depth', value: 'Angular and TypeScript' },
    { label: 'Working in', value: 'React and React Native' },
    { label: 'Backend & Data', value: 'C# and SQL' },
  ],
  stats: [
    { value: 9, suffix: '+', label: 'Years of experience' },
    { value: 13000, suffix: '+', label: 'Users on products I build' },
    { value: 3, suffix: '', label: 'Legacy apps modernized' },
  ],
}

// Scrolling band under the hero. Pulled from the skills list below.
export const ticker = [
  'TypeScript',
  'Angular',
  'React',
  'NgRx',
  'RxJS',
  'Node.js',
  '.NET Core',
  'SQL Server',
  'PostgreSQL',
  'GitHub Actions',
  'Claude',
  'GitHub Copilot',
]

export const about = [
  'I am a senior front end developer in Markham, Ontario. At Jonas Software I build data-rich interfaces for enterprise business intelligence products used by 13,000+ users, support four product teams, and lead migrations from legacy applications to modern stacks. I work in React, TypeScript and Angular: Angular and NgRx in production, React prototypes and proofs of concept at work, and React apps of my own, including Plateau and Aethr.',
  'I take ownership of a feature from requirements through release and production support. I lead migrations from legacy applications to modern stacks, and I mentor junior and intermediate developers through code review. I care about readable, maintainable code and I write tests alongside it.',
  'I use GitHub Copilot and Claude every day for scaffolding, test generation, debugging, and code review. I review everything they produce, and I own what ships.',
]

// Mirrors the skills section of the resume, in the same order and wording.
export const skills: SkillGroup[] = [
  {
    title: 'Frontend',
    note: 'React, TypeScript and Angular, from enterprise BI products to apps I build myself.',
    items: [
      'React (Hooks, React Router, React Native)',
      'TypeScript',
      'JavaScript (ES6+)',
      'Angular (NgRx, RxJS, OnPush, lazy loading)',
      'HTML5',
      'CSS3',
      'Responsive design',
    ],
  },
  {
    title: 'State & Data',
    items: ['Zustand', 'TanStack Query (React Query)', 'NgRx', 'RxJS', 'Supabase', 'REST API integration'],
  },
  {
    title: 'Testing & Delivery',
    items: [
      'Vitest',
      'React Testing Library',
      'Unit and integration testing',
      'CI/CD pipelines',
      'GitHub Actions',
      'Git',
      'Code review',
      'Agile/Scrum',
    ],
  },
  {
    title: 'Backend & Data',
    items: ['Node.js', 'C# / .NET Core', 'RESTful APIs', 'SQL (authoring & optimization)', 'SQL Server', 'PostgreSQL'],
  },
  {
    title: 'AI-Assisted Development',
    note: 'Agentic workflows, test scaffolding, debugging, code review.',
    items: ['Claude', 'GitHub Copilot'],
  },
]

export const experience: Job[] = [
  {
    role: 'Senior Front End Developer',
    company: 'Jonas Software',
    location: 'Markham, ON',
    period: 'Sept 2019 to Present',
    bullets: [
      'Support 4 teams, each building a different enterprise business intelligence product, driving work from technical planning to release and production support for 13,000+ users.',
      'Lead legacy-to-modern migrations (3 applications to date), including a vanilla JavaScript business intelligence app moved to Angular with NgRx and OnPush.',
      'Cut client portal wait times by modernizing data flows: ~85% faster work-order refresh, ~70% faster invoice inquiries (300 per-row checks collapsed into one paged call), and ~75% faster page navigation.',
      'Build data-rich reporting and analytics interfaces, including dashboards and multi-step workflows over large datasets.',
      'Build React prototypes and proofs of concept, and evaluate React against Angular in migration planning, comparing component architecture, state management, and performance.',
      'Mentor junior developers through code reviews focused on readability, testability, and maintainability.',
      'Partner with product owners to clarify requirements, rework technical specs, and flag risks early.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'Alcohol Countermeasure Systems',
    location: 'Toronto, ON',
    period: 'Sept 2017 to Sept 2019',
    bullets: [
      'Built client management applications with TypeScript and Bootstrap, ensuring cross-browser compatibility.',
      'Maintained and optimized production e-commerce sites with PayPal payment integration, and partnered with marketing on SEO and UI improvements.',
    ],
  },
]

export const projects: Project[] = [
  {
    slug: 'plateau',
    name: 'Plateau',
    tagline: 'A workout tracker for lifters running a structured program.',
    status: 'Live',
    summary:
      'Build your own training split, log every set with weight, reps and warm-up flags, add per-exercise notes, and review your full session history.',
    liveUrl: 'https://workout-tracker-zeta-neon.vercel.app',
    repoUrl: 'https://github.com/Fawwazmaniar/workout-tracker',
    diagram: [
      { label: 'Client', nodes: ['React', 'TypeScript'] },
      { label: 'Backend', nodes: ['Supabase'] },
      { label: 'Database', nodes: ['Postgres', 'Row Level Security'] },
    ],
    problem:
      'Lifters following a structured program need to build their own training split, log every set accurately, and look back over their full history.',
    approach: [
      'Build your own training split.',
      'Log every set with weight, reps and warm-up flags, and add notes per exercise.',
      'Review your full session history.',
      'All data access is enforced by Postgres Row Level Security.',
      'Tests with Vitest and React Testing Library, run with lint, typecheck and the build in GitHub Actions on every push and pull request.',
    ],
    // Matches the repo's package.json, README and CI workflow.
    stack: [
      { name: 'React', role: 'UI components' },
      { name: 'TypeScript', role: 'Static typing' },
      { name: 'Vite', role: 'Build tool and dev server' },
      { name: 'React Router', role: 'Client-side routing' },
      { name: 'Zustand', role: 'State the app controls: the auth session, current role and in-progress form selections' },
      { name: 'TanStack Query', role: 'Server state, caching and mutations' },
      { name: 'Supabase', role: 'Postgres database, Auth and Row Level Security' },
      { name: 'Radix UI', role: 'Accessible, unstyled dialog primitives for all modals' },
      { name: 'React Icons', role: 'Icons' },
      { name: 'Vitest', role: 'Test runner, with the Supabase client mocked so tests never reach a real project' },
      { name: 'React Testing Library', role: 'Component and screen tests' },
      { name: 'GitHub Actions', role: 'CI: lint, typecheck, tests and build on every push and pull request' },
    ],
    keyDecisions: [
      "Server state lives in TanStack Query and app-controlled state in Zustand, so caching and UI state don't get tangled.",
      'Supabase Row Level Security enforces that users can only read and write their own data, so the client never decides ownership.',
      'A workout is saved only when the user taps "Finish", in a single Postgres function call, so half-finished sessions never end up in history and a failed save rolls back cleanly.',
    ],
    tradeoffs:
      'Editing a saved workout is not atomic yet, exercises can be moved up and down but there is no drag and drop, and it is a web app rather than a native one.',
    next: [
      'Track progress over time with charts, and highlight personal records.',
      'Make editing a saved workout atomic, like Finish already is.',
    ],
    learned: [
      'Separating server state (React Query) from app-controlled state (Zustand), and enforcing data ownership in the database with Row Level Security instead of in client code.',
    ],
  },
  {
    slug: 'aethr',
    name: 'Aethr',
    tagline: 'A two-sided mobile marketplace for spiritual and wellness services.',
    status: 'In testing on TestFlight and Play Store',
    summary:
      'Connects people with providers of tarot, astrology and similar practices. A consumer app for discovering and booking sessions, and a provider app for managing availability, bookings and client communication.',
    liveUrl: 'https://intotheaethr.com/',
    repoUrl: '', // TODO: add the repo link if it is public
    // TODO: check this matches how Aethr is actually wired together.
    diagram: [
      { label: 'React Native', nodes: ['Consumer app', 'Provider app'] },
      { label: 'Auth', nodes: ['Google and Apple Sign-In', 'Supabase'] },
      { label: 'Services', nodes: ['Stripe', 'Daily.co', 'Google Places'] },
    ],
    problem:
      'A two-sided marketplace has to serve both sides: people discovering and booking sessions with spiritual and wellness providers, and providers managing their availability, bookings and client communication.',
    approach: [
      'Dual-role experience: a consumer app for discovering and booking sessions, and a provider app for managing availability, bookings and client communication.',
      'Real-time video sessions via Daily.co, in-app messaging, and calendar-based scheduling.',
      'Secure sign-in with Google and Apple, backed by Supabase.',
      'Stripe-powered payments and booking flow.',
      'Location-aware discovery using Google Places.',
      'Built as a production iOS and Android app, shipped through EAS Build and Submit to TestFlight and Play Store testing tracks.',
    ],
    // TODO: the "role" text restates what each tool does in the app. Rewrite it as your reasons for choosing it.
    stack: [
      { name: 'React Native', role: 'One codebase for the iOS and Android apps' },
      { name: 'Supabase', role: 'Backend behind authentication' },
      { name: 'Google and Apple Sign-In', role: 'Secure sign-in' },
      { name: 'Stripe', role: 'Payments and the booking flow' },
      { name: 'Daily.co', role: 'Real-time video sessions' },
      { name: 'Google Places', role: 'Location-aware discovery' },
      { name: 'EAS Build and Submit', role: 'Builds and releases to TestFlight and Play Store testing tracks' },
    ],
    next: [], // TODO: what you would do next
    learned: [], // TODO: what you learned
  },
]

export const education: Education[] = [
  {
    title: 'BSc Computer Science',
    school: 'Trent University, Oshawa',
    note: "Dean's Honour Roll",
  },
  {
    title: 'Advanced Diploma, Computer Programming and Analysis',
    school: 'Seneca College, Toronto',
  },
]

export const coursework = [
  'Data Structures and Algorithms',
  'Database Management Systems',
  'Programming Languages',
  'Computer Architecture and Design',
  'Web Development',
]

export const footer = { builtWith: 'Built with React and TypeScript' }
