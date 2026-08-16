# Godot Knowledge Base

A personal, self-contained reference site for building games with Godot. It is organized around problems you need to solve, not around courses or projects.

## Run locally

```bash
npm install
npm run dev
```

Open the address printed by Astro (normally `http://localhost:4321`).

## Verify a change

```bash
npm run build
npm run preview
```

`npm run build` validates the content and generates the production site in `dist/`.

## Document a completed course module

From this repository, run:

```bash
npm run module -- /path/to/the/completed-godot-project
```

This validates the source directory and opens OpenCode with the repository's complete documentation-update workflow. You only supply the project path; the command supplies the instructions from `AGENTS.md`.

The agent inspects the project, updates or creates canonical documentation, maintains links, and runs the build. It does **not** automatically approve permissions.

## Content structure

- `src/content/docs/foundations/` — concepts shared by all Godot work.
- `src/content/docs/2d/` and `src/content/docs/3d/` — APIs and workflows specific to each dimension.
- `src/content/docs/systems/` — UI, state, audio, saving, debugging, and other game systems.
- `src/content/docs/patterns/` — reusable solutions to practical problems.
- `src/content/docs/evidence/` — self-contained summaries of inspected material; never links to local course files.

Read [`AGENTS.md`](AGENTS.md) before adding or changing documentation.

## Deploy to GitHub Pages

1. Create a GitHub repository named `godot-knowledge-base` and push this project.
2. In **Settings → Pages**, set the source to **GitHub Actions**.
3. Push to `main`. The included workflow builds and deploys the site.

The Astro configuration derives the repository path automatically during GitHub Actions builds, so it works for a project site such as `https://<owner>.github.io/godot-knowledge-base/`.
