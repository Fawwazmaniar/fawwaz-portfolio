/**
 * ALL copy and data for the site lives here. Edit this file; components just render it.
 * Empty strings / empty arrays render a visible "Coming soon" state, never a fake value.
 */
import type { Education, Job, NavItem, Project, SkillGroup } from './types.ts'

export const site = {
  // Used for the canonical link, Open Graph, sitemap and structured data.
  url: 'https://www.fawwazmaniar.dev',
  title: 'Mohammed Fawwaz Maniar | Senior Full Stack Engineer, Frontend Specialist',
  description:
    'Senior full stack engineer and frontend specialist in Markham, Ontario. Eight-plus years of Angular and TypeScript, now building in React. Open to senior front-end and full-stack roles.',
}

export const person = {
  name: 'Mohammed Fawwaz Maniar',
  brand: 'Fawwaz.',
  jobTitle: 'Senior Full Stack Engineer · Frontend Specialist',
  location: 'Markham, Ontario, Canada',
  email: 'fawwazmaniar@gmail.com',
  // TODO: add your profile URLs. While empty, they render as "coming soon".
  github: 'https://github.com/Fawwazmaniar',
  linkedin: 'https://www.linkedin.com/in/fawwaz-maniar-899a2aa6/',
  resumeUrl: '/resume.pdf', // TODO: drop your PDF at public/resume.pdf
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
  positioning: 'Senior front-end engineer. Angular and TypeScript depth, building in React.',
  intro:
    'I own features end to end, lead legacy-to-modern migrations, and mentor other developers. I have 8+ years of experience, currently at Jonas Software.',
  facts: [
    { label: 'Depth', value: 'Angular and TypeScript' },
    { label: 'Building in', value: 'React and React Native' },
    { label: 'Backend and data', value: 'C# and SQL' },
  ],
  // Facts from the experience section, not estimates.
  stats: [
    { value: 8, suffix: '+', label: 'years of experience' },
    { value: 5, suffix: '+', label: 'enterprise products' },
    { value: 10000, suffix: '+', label: 'users served' },
    { value: 3, suffix: '', label: 'legacy apps migrated' },
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
  'I am a senior full stack engineer and frontend specialist in Markham, Ontario. My depth is Angular and TypeScript, building data-heavy interfaces for enterprise business intelligence products. I am now building in React through personal projects, including a workout tracker called Plateau and a React Native marketplace app called Aethr.',
  'I take ownership of a feature from requirements through release and production support. I lead migrations from legacy applications to modern stacks, and I mentor junior and intermediate developers through code review. I care about readable, maintainable code and I write tests alongside it.',
  'I use GitHub Copilot and Claude every day for scaffolding, test generation, debugging, and code review. I review everything they produce, and I own what ships.',
]

export const skills: SkillGroup[] = [
  {
    title: 'Frontend',
    note: 'Angular is my professional depth. My React experience comes from personal projects.',
    items: [
      'TypeScript',
      'JavaScript (ES6+)',
      'React (Hooks, React Router, React Hook Form)',
      'Angular (NgRx, RxJS, OnPush, lazy loading)',
      'HTML5',
      'CSS3',
      'Bootstrap',
      'Responsive and mobile-first design',
    ],
  },
  {
    title: 'State and data fetching',
    items: ['Zustand', 'TanStack Query (React Query)', 'NgRx', 'RxJS', 'REST API integration'],
  },
  {
    title: 'Testing and delivery',
    items: ['React Testing Library', 'Automated testing', 'CI/CD', 'GitHub Actions', 'Git', 'Code review'],
  },
  {
    title: 'Backend and data',
    items: ['Node.js', 'C# / .NET Core', 'RESTful APIs', 'SQL (authoring and optimization)', 'SQL Server', 'PostgreSQL'],
  },
  {
    title: 'AI-assisted development',
    items: [
      'GitHub Copilot',
      'Claude (agentic workflows, code generation, test scaffolding, debugging, code review)',
    ],
  },
  {
    title: 'Ways of working',
    items: ['Agile/Scrum', 'Requirements analysis', 'Cross-functional collaboration', 'Mentorship'],
  },
]

// The "~" figures are my own estimates. Edit or delete any `metric` freely.
export const experience: Job[] = [
  {
    role: 'Senior Front End Engineer',
    company: 'Jonas Software',
    location: 'Markham, ON',
    period: 'Sept 2019 to present',
    bullets: [
      {
        text: 'Owned features end to end across 5+ enterprise business intelligence products serving 10,000+ users, from requirements and design through testing, release, and production support',
      },
      {
        text: 'Led migration of 3 legacy applications to modern Angular with NgRx and OnPush change detection',
        metric: '~40% faster load times',
      },
      {
        text: 'Optimized SQL queries (SQL Server, PostgreSQL) behind reporting dashboards',
        metric: '~50% faster average execution on millions of rows',
      },
      { text: 'Built data-heavy interfaces: dashboards and multi-step workflows over large datasets' },
      {
        text: 'Set testing and delivery standards: automated testing gates, Git branching strategy, CI/CD practices',
        metric: '~35% fewer integration failures',
      },
      {
        text: 'Mentored 4 junior and intermediate developers through code reviews focused on readability, testability, and maintainability',
        metric: '~20% shorter review cycles',
      },
      {
        text: 'Used GitHub Copilot and Claude daily for scaffolding, test generation, and debugging',
        metric: '~30% less repetitive coding work',
        suffix: 'with all AI-generated code reviewed and owned by me',
      },
      {
        text: 'Partnered with product owners on requirements and technical risk; ran sprint planning and retrospectives for a team of 6',
        metric: '~15% sprint velocity improvement over two years',
      },
    ],
  },
  {
    role: 'Web Developer',
    company: 'Alcohol Countermeasure Systems',
    location: 'Toronto, ON',
    period: 'Sept 2017 to Sept 2019',
    bullets: [
      {
        text: 'Drove an 80% increase in e-commerce revenue by working with marketing on SEO strategy and UI improvements across 6 global e-commerce websites',
      },
      { text: 'Built client management applications with TypeScript and Bootstrap, with cross-browser compatibility' },
      { text: 'Maintained and optimized 6 production e-commerce sites, including PayPal payment integration' },
    ],
  },
]

export const projects: Project[] = [
  {
    slug: 'plateau',
    name: 'Plateau',
    tagline: 'A workout tracker for lifters running a structured program.',
    status: 'In progress',
    summary:
      'Build your own training split, log every set with weight, reps and warm-up flags, add per-exercise notes, and review your full session history.',
    liveUrl: 'https://workout-tracker-zeta-neon.vercel.app',
    repoUrl: '', // TODO: add the repo link
    screenshots: [
      {
        src: '/screenshots/plateau-1.png',
        alt: "Plateau's welcome screen: a dark card with the Plateau logo, the headline \"Train with intent\", and Create account and Log in buttons.",
        width: 974,
        height: 1006,
      },
      // TODO: add more screenshots, e.g. logging a set and session history
    ],
    // TODO: check this matches how Plateau is actually wired together.
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
      'Write tests alongside each feature, so the project doubles as practice for my testing habits.',
    ],
    // TODO: the "role" text is my short description of each tool's job here. Rewrite it as your actual reasons for choosing it.
    stack: [
      { name: 'React', role: 'UI components' },
      { name: 'TypeScript', role: 'Typed models for workouts, sets and records' },
      { name: 'Supabase', role: 'Backend and Postgres database, with Row Level Security enforcing all data access' },
      { name: 'Zustand', role: 'Client-side state' },
      { name: 'React Hook Form', role: 'Workout entry forms' },
      { name: 'React Testing Library', role: 'Component tests written alongside features' },
      { name: 'Vite', role: 'Dev server and build tooling' },
    ],
    next: ['Track progress over time with charts, and highlight personal records.'], // TODO: add more
    learned: ['Practising writing tests alongside features, rather than after them.'], // TODO: add more
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
    screenshots: [
      {
        src: '/screenshots/aethr-1.png',
        alt: 'Two phones showing the Aethr app\'s Your Appointments screen: a booking card for a tarot reader with a Go to link button, and a calendar of appointments.',
        width: 814,
        height: 798,
      },
      // TODO: add more screenshots, e.g. discovery, booking and the video session
    ],
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
    period: '2021 to 2023',
    note: "Dean's Honor Roll",
  },
  {
    title: 'Advanced Diploma, Computer Programming and Analysis',
    school: 'Seneca College, Toronto',
    period: '2012 to 2016',
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
