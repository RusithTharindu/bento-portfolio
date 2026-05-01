# Bento Portfolio

A bento-inspired personal portfolio for Rusith Tharindu Thushan, built with Next.js, React, TypeScript, and Tailwind CSS.

The goal of this project is to ship a polished, production-grade portfolio experience with strong type safety, clean component architecture, responsive layouts, and a visual direction based on the `bento-portfolio-handoff/` design bundle.

## Requirements

- Node.js 22
- npm

## Getting Started

Install dependencies:

```bash
npm ci
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

```bash
npm run dev
```

Starts the local Next.js development server.

```bash
npm run lint
```

Runs ESLint.

```bash
npm run typecheck
```

Runs TypeScript with `tsc --noEmit`.

```bash
npm run build
```

Creates a production Next.js build and validates route/build correctness.

## GitHub Activity

The Activity section can render real GitHub contribution and repository data through the GitHub GraphQL API.

Create a local `.env.local` file:

```bash
GITHUB_USERNAME=your-github-username
GITHUB_TOKEN=your-read-only-github-token
```

`GITHUB_TOKEN` is read only on the server. Do not expose it as a `NEXT_PUBLIC_` variable.

If either value is missing, the Activity section falls back to sample data so local builds and CI still pass.

## CI

GitHub Actions runs on pull requests and pushes to `main`.

The CI workflow installs dependencies with `npm ci`, then runs:

- `npm run lint`
- `npm run typecheck`
- `npm run build`

Workflow file: `.github/workflows/ci.yml`

## Project Standards

- Keep implementation production ready and production grade.
- Preserve type safety across components, data models, and route props.
- Keep pages mobile responsive across desktop, tablet, and small screens.
- Keep `app/` route files thin and delegate screen rendering to organism-level components.
- Follow the local Next.js guidance in `AGENTS.md` before changing framework-specific behavior.
