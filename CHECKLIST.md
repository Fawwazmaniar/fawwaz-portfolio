# What you still need to supply

## Links and files
- [x] `person.github` set
- [x] `person.linkedin` set from your resume
- [x] `site.url` set to https://www.fawwazmaniar.dev
- [ ] `public/resume.pdf`: the "Download resume" button points here and 404s until it exists
- [ ] A 1200x630 `public/og.png`, then add `og:image` / `twitter:image` and switch `twitter:card` to `summary_large_image` in `index.html`

## Plateau (`projects[0]`)
Stack, key decisions, trade-offs and "what I learned" now come from the repo's `package.json` and README.
- [x] `liveUrl` and `repoUrl` set
- [ ] Check the card `diagram` matches how Plateau is wired (React, Supabase, Postgres with Row Level Security)
- [ ] `next`: has charts and personal records (from your first brief). Add more
- [ ] Confirm "warm-up flags" in the summary: your description has it, the README doesn't mention it

## Aethr (`projects[1]`)
Filled in from the details you pasted. Still needed:
- [ ] Check the card `diagram`: the arrows imply both apps use auth and the services, which I assumed
- [x] `liveUrl` set to intotheaethr.com
- [ ] `repoUrl` (if public)
- [ ] More Aethr `screenshots` (one added: the appointments screens). Add discovery, booking and the video session
- [ ] `stack[].role`: restates what each tool does in the app. Rewrite as your reasons for choosing it
- [ ] `next` and `learned`: empty, show "Coming soon"
- [ ] Confirm the `problem` wording and the status line "In testing on TestFlight and Play Store"

## Placeholders in the code (all marked `TODO`)
| Where | What renders |
|---|---|
| `person.github`, `person.linkedin` empty | "GitHub (coming soon)" / "LinkedIn (coming soon)" |
| `project.liveUrl` / `repoUrl` empty | "Live site link coming soon" |
| `project.screenshots` empty | dashed "Screenshots coming soon" box on the detail page (no project hits this now) |
| `project.diagram` empty | "Diagram coming soon" on the card |
| Empty detail sections | "Coming soon" |
| Aethr stack empty | "Stack details coming soon" on the card |
| `index.html` | TODO for og:image |

## Also worth checking
- [ ] Run Lighthouse on the deployed site (not yet measured)
