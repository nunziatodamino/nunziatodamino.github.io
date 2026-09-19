# Nunziato Damino

A personal site with two entrances: a painting portfolio and **COSM-OS-2**, an Obsidian knowledge garden about physics and mathematics. Built with [Quartz](https://quartz.jzhao.xyz/) and hosted on GitHub Pages.

## Preview locally

Use Node.js **22** (with nvm installed, run `nvm use`), then:

```sh
npm ci
npm run dev
```

Open **http://localhost:8080**. Changes to content and site code trigger a rebuild. Stop the server with Ctrl+C. A local preview does not push anything to GitHub or use Actions minutes.

```sh
npm run build                   # Production output in public/
npm test                        # Path, dependency graph, and portfolio tests
npx tsc --noEmit                 # TypeScript validation
```

The generated `public/` directory, dependencies, and build caches are ignored by Git. Review locally before pushing: pushes to `master` trigger the existing Pages deployment. Do not use `quartz sync` for a local preview: it can commit and push vault changes.

## Content and navigation

- `/` — the personal homepage, with Painter and Physicist entrances.
- `/painter/` — selected paintings and exhibitions.
- `/painter/exhibitions/` — exhibition archive, including **Allucinazione collettiva** (2019) and **I notturni** (2018).
- `/physicist/` — the original COSM-OS-2 introduction and subject links.
- Physics notes retain their original paths and Obsidian links. Search, explorer, graph, and RSS stay focused on physics; the sitemap includes both sections.

The homepage and portfolio use dedicated Quartz components. Physics pages retain the existing Quartz layout and gain navigation back to either section. Colours and layout for the personal pages are in `quartz/components/styles/personal.scss`.

## Add a painting

1. Put a web-sized JPEG, WebP, PNG, or AVIF image in `content/painter/images/`. Prefer lowercase, hyphenated filenames. Around 1600–2400 pixels on the long edge is usually sufficient; aim below 1 MB per image. Keep full-resolution originals outside this site repository.
2. Create a Markdown file directly in `content/painter/`, for example `content/painter/evening-study.md`:

```yaml
---
title: Evening study
year: 2026
medium: Oil on canvas
dimensions: 40 × 60 cm
image: painter/images/evening-study.webp
alt: Describe the visible painting here for someone who cannot see it.
order: 10
draft: false
---
```

Any Markdown below the frontmatter appears on the artwork detail page. All fields in the example are required except `draft`, `year`, and `dimensions`. Omit unknown painting years or dimensions; the site will leave them out of the caption. The image path is relative to `content/`, without a leading slash. Smaller `order` numbers appear first; use gaps such as 10, 20, and 30 to make later additions easy. Ties use the filename. The build reports missing metadata or images before publishing.

Set `draft: true` to hide an unfinished artwork page and its gallery entry. As with other Quartz assets, image files are still copied into the public build; keep unpublished/private images outside `content/`.

Preview the gallery and artwork page with `npm run dev`, then commit only the intended files when ready. No CMS, external image service, or subscription is needed.

## Add an exhibition

Create `content/painter/exhibitions/<exhibition-slug>/index.md`. The `I notturni` page is a working example. Frontmatter specifies `title`, `year`, `dates`, `venue`, `location`, `poster`, `posterOriginal`, and `artworks` (an ordered list of existing painting slugs such as `painter/addio`). Poster paths are relative to `content/` and must be under `painter/images/`. `posterOriginal` accepts an image or PDF; the existing `posterPdf` field is also supported. An optional `role` describes your contribution, such as “Art director and exhibiting artist”.

The exhibition appears automatically on the painter page and exhibition archive. If no poster is available, omit both poster fields to display a text-only entry. When only the year is known, use a quoted year for `dates` (for example, `dates: "2021"`); use `artworks: []` when the exhibited works have not been identified. The list order in `artworks` controls its gallery independently of portfolio order. Painting detail pages link back to their exhibitions. Markdown below the frontmatter can contain an introduction or press links. Missing referenced painting or poster files stop the build.

Keep source photos and posters under the root `exhibitions/` directory. Only prepared web copies under `content/` are deployed. [I notturni asset notes](docs/i-notturni-assets.md) and [Allucinazione collettiva asset notes](docs/allucinazione-collettiva-assets.md) record the original filenames, processing settings, and known dimensions. Preparing these images is a local step, with no new CI dependencies or image services.

## Hosting and costs

Keep this repository **public** and use the existing `nunziatodamino.github.io` address. GitHub Pages is available on GitHub Free for public repositories, and standard GitHub-hosted Actions runners are free for public repositories under [GitHub's current billing policy](https://docs.github.com/en/billing/concepts/product-billing/github-actions).

The deployment uses standard Ubuntu runners and Node 22, uploads only the Pages artifact with one-day retention, and adds no caches, paid runners, or third-party hosting. Analytics is disabled. Existing Google Fonts are free; homepage images are stored locally and require no runtime image service. See [background assets and generation prompt](docs/homepage-backgrounds.md). This repository does not control account-wide billing, unrelated workflows, or future GitHub pricing changes.

[GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits) include a **1 GB maximum published site**, a recommended 1 GB source repository limit, and a soft 100 GB monthly bandwidth limit. Optimise paintings before adding them. Check the generated size with `du -sh public`. Review account-level Actions storage usage and spending limits before enabling any paid feature; short artifact retention does not replace account-level billing controls.
