# Tanishk Singh — Portfolio

Next.js 16 + TypeScript + Tailwind v4, deployed to Cloudflare Workers via OpenNext.

## Design system

Reference for the tokens in `app/globals.css` — change here, not inline, if the
palette or type ever moves.

| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#fafaf7` | page background |
| `--color-ink` | `#15171c` | headings, body text |
| `--color-muted` | `#5b6472` | secondary text |
| `--color-accent` | `#1f4a42` | links, CTAs, active states |
| Tag colors | see `globals.css` | `research` / `industry` / `personal` pill categories |

Type: **Fraunces** (display, used with restraint) + **Inter** (body/UI), both
loaded via `next/font/google` in `lib/fonts.ts`.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

> Note: `next/font/google` needs to reach `fonts.googleapis.com` at build
> time. That's normal on your machine and on Cloudflare's build — it's only
> blocked in the sandboxed environment this was built in.

## Editing content

Everything content-related lives in `data/` and `content/` — no need to touch
components to update copy.

- **`data/projects.ts`** — project cards (title, summary, tags, status). Add
  a new object here for a new project card.
- **`content/projects/[slug].tsx`** — the long-form write-up for each project
  detail page. Register new files in `content/projects/index.tsx`.
- **`data/articles.ts`** + **`content/articles/[slug].tsx`** — same pattern
  for writing.
- **`data/experience.ts`** — timeline entries on the About page. `category`
  drives both the tag color and the pill label (`research` / `industry` /
  `personal`).
- **`data/skills.ts`** — the categorized toolkit grid.
- **`data/stats.ts`** — the homepage stat strip.

All current content is placeholder, intentionally labeled honestly (e.g.
`"In Progress"`, no invented metrics) so nothing false ships if you forget to
edit something before deploying.

## Deploying to Cloudflare (tanishksingh.com)

One-time setup:

```bash
npx wrangler login
```

Then, from the project root:

```bash
npm run cf:deploy
```

This runs the OpenNext Cloudflare build (`.open-next/`) and deploys via
Wrangler, using the config in `wrangler.jsonc`. To preview the Workers build
locally before deploying:

```bash
npm run cf:preview
```

After the first deploy, connect `tanishksingh.com` to the Worker from the
Cloudflare dashboard: **Workers & Pages → tanishk-portfolio → Settings →
Domains & Routes → Add Custom Domain**.

## Project structure

```
app/                   # routes (App Router)
  page.tsx             # home
  about/page.tsx
  projects/page.tsx    # listing
  projects/[slug]/     # detail
  articles/page.tsx    # listing
  articles/[slug]/     # detail
  contact/page.tsx
  sitemap.ts, robots.ts
components/            # shared UI (Nav, Footer, cards, Timeline, etc.)
content/                # long-form body content, registered per slug
data/                   # all editable content — projects, articles, skills, etc.
lib/                    # fonts.ts, utils.ts (cn helper)
types/                  # shared content types
```
