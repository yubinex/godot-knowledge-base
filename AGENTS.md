# Godot Knowledge Base — Agent Guide

## Purpose

Maintain a polished, self-contained Godot reference site for a learner making independent games. Teach reusable Godot knowledge, not course notes. A learner must be able to search a problem, find one canonical page, understand its prerequisites, and continue to related work.

## Content ownership

| Location | Owns |
| --- | --- |
| `foundations/` | Concepts and APIs shared by 2D and 3D work: signals, scenes, input, timers, groups. |
| `2d/` | 2D-specific nodes, types, and workflows. |
| `3d/` | 3D-specific nodes, types, and workflows. |
| `systems/` | Cross-cutting game systems such as UI, state, saving, audio, and debugging. |
| `patterns/` | Reusable task-oriented solutions that link to their prerequisites. |
| `evidence/` | Self-contained summaries of inspected projects, courses, experiments, or research. |

## Before writing

1. Inspect supplied material first; never invent behavior or APIs.
2. Search all documentation for the normalized title, likely aliases, Godot class/method names, and the question being answered.
3. Read close matches. Update the canonical page if the durable topic already exists.
4. Create a new page only when it answers a genuinely distinct question. Never create duplicate or provider-prefixed pages such as `Signals 2`, `GDQuest Signals`, or `New Signals`.

## 2D and 3D rule

- Keep one shared page when the API and idea are the same: **Signals**, **Timers**, **Groups**, scene instantiation, input actions, and UI.
- Create separate 2D and 3D pages when nodes, types, APIs, or workflows differ: `Area2D`/`Area3D`, `CharacterBody2D`/`CharacterBody3D`, `Vector2`/`Vector3`, `Camera2D`/`Camera3D`, and dimension-specific movement or physics patterns.
- Link every specialized page to the shared foundation it depends on. Do not make a page called “3D Signals” unless the page addresses a distinct 3D-only API or workflow.

## Required page metadata

Every substantive page uses this frontmatter:

```yaml
---
title: Clear canonical title
description: One-sentence search-friendly summary.
sidebar:
  order: 1
---
```

Use descriptive filenames. The title, description, first heading, internal links, and sidebar location are the discovery system; write them for the question a learner would search.

## Linking contract

- Every new concept or pattern must be linked from its section index page or the sidebar.
- A pattern starts with **Prerequisites** and links every concept the learner must understand to use it.
- Add a short **Related** section only for genuinely useful next pages; do not make link dumps.
- Link concept names in prose the first time they are relevant.
- Check that all Markdown links resolve. Keep link labels meaningful.
- Do not maintain redundant reverse-dependency lists; the site’s backlinks/search and links from patterns provide context.

## Evidence and self-containment

- Courses and projects are evidence, never navigation categories or duplicated concept collections.
- Evidence pages may state what was inspected and what was observed, but must be useful without the original source.
- Never link to local paths, private repositories, course-project files, or copied proprietary course text.
- Use original wording. Label generalized examples as adapted when they are not directly runtime-tested.

## Writing standard

- Write for a beginner who is actively building a game.
- Use short sections, direct language, compact GDScript examples, pitfalls, and next steps.
- Concepts answer “what is this and why does it matter?” Patterns answer “how do I build this?”
- Preserve learner-authored content; do not overwrite it without asking.

## Update workflow for a course or project

Run `npm run module -- /path/to/project` from the repository root to start OpenCode with this workflow prefilled.

1. Inspect the material.
2. Add or update one self-contained evidence page.
3. Merge shared lessons into existing canonical pages.
4. Add specialized 2D/3D pages only when the distinction meets the 2D/3D rule.
5. Add prerequisite and related links; update section navigation when needed.
6. Run `npm run build` and fix all failures before reporting completion.

## Development

- Use `npm run dev` for local development.
- Run `npm run build` before finishing every content or configuration change.
- The GitHub Pages workflow builds automatically on pushes to `main`.
