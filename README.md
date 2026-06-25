# Swane Portfolio Frontend

This repository contains the frontend for Stephen Paul Bautista's personal portfolio. It is a static React/Vite single-page site focused on recruiter-friendly presentation, project storytelling, resume-aligned experience, and polished responsive UI.

This repo does not contain a backend application. Any dynamic-looking behavior is handled in the browser or generated ahead of time as static data.

## Tech Stack

- React 18
- TypeScript
- Vite
- Sass
- Tailwind CSS base setup
- GitHub Pages deployment with `gh-pages`

## Features

- Responsive hero section with theme-aware profile image.
- Work, education, and awards grouped into one Journey section.
- Featured project cards with impact bullets, tech tags, repository links, and live preview links.
- Skills and GitHub activity section.
- Light/dark theme toggle with local storage persistence.
- Interactive Portfolio Guide for quick portfolio Q&A.
- Static GitHub contribution data loaded from `public/github-contributions.json` when available.

## Project Structure

```txt
src/
  components/portfolio/     Active portfolio sections and shared UI
  data/                     Portfolio content and UI constants
  hooks/                    Theme, active section, and GitHub activity hooks
  types/                    Shared TypeScript types
  utils/                    Contribution helpers and Portfolio Guide logic
  assets/                   Resume, profile, project, certificate, and social assets
```

Most portfolio content is centralized in:

```txt
src/data/portfolioData.ts
```

Update this file for profile copy, contact links, experience, education, awards, projects, and Portfolio Guide starter prompts.

An extended RAG-ready knowledge file for SwaneAI lives at:

```txt
docs/stephen-portfolio-knowledge.md
```

Use it as backend retrieval context for public career, portfolio, project, skills, education, awards, certification, contact, and GitHub activity facts.

## GitHub Activity Data

The portfolio can display real GitHub contribution data without exposing a token in the frontend.

Local generation:

```bash
$env:GH_CONTRIBUTIONS_TOKEN="your_token_here"
npm run fetch:github
```

This creates:

```txt
public/github-contributions.json
```

On GitHub, add a repository secret named `GH_CONTRIBUTIONS_TOKEN`. The workflow in `.github/workflows/refresh-github-activity.yml` refreshes the JSON data on a schedule and can also be run manually.

If the JSON file is missing, the site falls back to a local placeholder grid and labels it as an offline fallback.

## Backend RAG Prompt

This repo includes a framework-agnostic system prompt for a future backend LangChain RAG API:

```txt
prompts/career-rag-system-prompt.md
```

The prompt is designed to answer only from Stephen's resume, portfolio, approved FAQ, project, and public contact context. It also includes refusal behavior for unrelated, unsupported, or unsafe requests.

## Scripts

Install dependencies:

```bash
npm install
```

Start development:

```bash
npm run dev
```

Generate GitHub activity JSON:

```bash
npm run fetch:github
```

Run lint:

```bash
npm run lint
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

Deploy to GitHub Pages:

```bash
npm run deploy
```

## Deployment

The production build outputs to `dist/` and is deployed to GitHub Pages using:

```bash
npm run deploy
```

Configured homepage:

```txt
https://swa-ne.github.io/
```
