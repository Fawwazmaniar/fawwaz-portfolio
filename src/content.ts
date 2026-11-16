/**
 * ALL copy and data for the site lives here. Edit this file; components just render it.
 * Empty strings / empty arrays render a visible "Coming soon" state, never a fake value.
 */
import type { Education, Job, NavItem, Project, SkillGroup } from './types.ts'

export const site = {
  // Used for the canonical link, Open Graph, sitemap and structured data.
  url: 'https://www.fawwazmaniar.dev',
  title: 'Mohammed Fawwaz Maniar · Senior Front End Developer (React, TypeScript)',
  description:
    'Senior front end developer in Toronto building production React and TypeScript apps. 9 years of experience, enterprise BI products used by 13,000+ users, modernizations that cut workflow times by up to 85%.',
}

export const person = {
  name: 'Mohammed Fawwaz Maniar',
  brand: 'Fawwaz.',
  jobTitle: 'Senior Front End Developer',
  location: 'Markham, Ontario, Canada',
  email: 'fawwazmaniar@gmail.com',
  // An empty profile URL renders as "coming soon".
  github: 'https://github.com/Fawwazmaniar',
  linkedin: 'https://www.linkedin.com/in/mohammed-fawwaz-maniar-899a2aa6/',
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
  positioning: 'Senior front end developer building production apps in React and TypeScript.',
  intro:
    'I own features end to end, lead legacy-to-modern migrations, and mentor other developers. I have 9 years of experience, currently at Jonas Construction Software.',
  facts: [
    { label: 'Core', value: 'React and TypeScript' },
    { label: 'Mobile', value: 'React Native' },
    { label: 'Backend & Data', value: 'C# and SQL' },
  ],
  stats: [
    { value: 9, suffix: '+', label: 'Years in software' },
    { value: 13000, suffix: '+', label: 'Users on products I build' },
    { value: 3, suffix: '', label: 'Legacy apps modernized' },
  ],
}

// Scrolling band under the hero. Pulled from the skills list below.
export const ticker = [
  'React',
  'TypeScript',
  'React Native',
  'TanStack Query',
  'Zustand',
  'Vite',
  'Vitest',
  'Node.js',
  '.NET Core',
  'PostgreSQL',
  'GitHub Actions',
  'Claude',
  'GitHub Copilot',
]

export const about = [
  "I'm a senior front end developer in Markham, Ontario with 9 years of software development experience, 6+ of them at Jonas Construction Software building data-rich interfaces for enterprise business intelligence products used by 13,000+ users.",
  'I build and ship production features in React and TypeScript, and support four product teams from technical planning through release and production support. I lead legacy-to-modern migrations (three applications so far), and modernization work I led cut key workflow times on our client portal by up to 85%. I also mentor junior developers through code review.',
  "I'm also experienced with Angular (NgRx, RxJS), which I've used extensively on enterprise apps, so I'm comfortable working in or migrating between both ecosystems.",
  'Outside work I keep building in React: Plateau, a live workout tracker, and Aethr, a React Native booking marketplace in testing on TestFlight and Google Play.',
  'Open to senior front-end and full-stack roles in Toronto or remote.',
]

// Mirrors the skills section of the resume, in the same order and wording.
export const skills: SkillGroup[] = [
  {
    title: 'Core',
    items: ['React (Hooks, React Router)', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind', 'Responsive design'],
  },
  {
    title: 'React ecosystem',
    items: ['TanStack Query (React Query)', 'Zustand', 'React Native', 'Vite'],
  },
  {
    title: 'Testing & Delivery',
    items: ['Vitest', 'React Testing Library', 'CI/CD', 'GitHub Actions', 'Git', 'Code review'],
  },
  {
    title: 'Backend & Data',
    items: ['Node.js', 'REST APIs', 'C# / .NET', 'SQL', 'PostgreSQL', 'Supabase'],
  },
  {
    title: 'Also experienced with',
    items: ['Angular (NgRx, RxJS, OnPush, lazy loading)'],
  },
  {
    title: 'AI-Assisted Development',
    items: ['Claude', 'GitHub Copilot'],
  },
]

export const experience: Job[] = [
  {
    role: 'Senior Front End Developer',
    company: 'Jonas Construction Software',
    location: 'Markham, ON',
    period: 'Sept 2019 to Present',
    tags: ['React', 'TypeScript', 'Angular', 'NgRx', 'RxJS', 'C# / .NET', 'SQL'],
    bullets: [
      'Build and ship production features in React and TypeScript for enterprise business intelligence products used by 13,000+ users, owning components, state management, and performance.',
      'Support 4 teams, each building a different enterprise business intelligence product, driving work from technical planning to release and production support for 13,000+ users.',
      'Lead legacy-to-modern migrations (3 applications to date), including a vanilla JavaScript business intelligence app rebuilt as a component-based TypeScript single-page app with centralized state management, and a client portal moved off legacy ASP.NET MVC 5.',
      'Cut client portal wait times by modernizing data flows: ~85% faster work-order refresh, ~70% faster invoice inquiries (300 per-row checks collapsed into one paged call), and ~75% faster page navigation.',
      'Move emails and retries to background processing, making work-order creation ~50% faster, and speed up report generation by ~30%.',
      'Build data-rich reporting and analytics interfaces, including dashboards and multi-step workflows over large datasets.',
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
    status: 'In testing on TestFlight & Google Play',
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
