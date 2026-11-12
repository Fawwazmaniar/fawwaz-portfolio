# What you still need to supply

## Links and files
- [x] `person.github` set
- [x] `person.linkedin` set from your resume
- [x] `site.url` set to https://www.fawwazmaniar.dev
- [ ] `public/resume.pdf`: the "Download resume" button points here and 404s until it exists
- [x] `public/og.png` text-only social card (regenerate with `npm run og`)

## Plateau (`projects[0]`)
Stack, key decisions, trade-offs and next steps come from the repo's `package.json`, README and CI workflow (re-checked 12 Nov: it now has tests, CI and an atomic Finish).
- [x] `liveUrl` and `repoUrl` set
- [ ] Check the card `diagram` matches how Plateau is wired (React, Supabase, Postgres with Row Level Security)
- [ ] `next`: has charts and personal records (from your first brief). Add more

## Aethr (`projects[1]`)
Filled in from the details you pasted. Still needed:
- [ ] Check the card `diagram`: the arrows imply both apps use auth and the services, which I assumed
- [x] `liveUrl` set to intotheaethr.com
- [ ] `repoUrl` (if public)
- [ ] `stack[].role`: restates what each tool does in the app. Rewrite as your reasons for choosing it
- [ ] `next` and `learned`: empty, show "Coming soon"
- [ ] Confirm the `problem` wording and the status line "In testing on TestFlight and Play Store"

## Placeholders in the code (all marked `TODO`)
| Where | What renders |
|---|---|
| `person.github`, `person.linkedin` empty | "GitHub (coming soon)" / "LinkedIn (coming soon)" |
| `project.liveUrl` / `repoUrl` empty | "Live site link coming soon" |
| `project.diagram` empty | "Diagram coming soon" on the card |
| Empty detail sections | "Coming soon" |
| Aethr stack empty | "Stack details coming soon" on the card |

## Also worth checking
- [ ] Run Lighthouse on the deployed site (not yet measured)
