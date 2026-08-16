---
title: How pages connect
description: The rules that keep the Godot knowledge base searchable, connected, and free of duplicates.
sidebar:
  order: 2
---

# How pages connect

## One canonical answer per question

There should be one primary page for each durable Godot concept or implementation problem. New material improves that page instead of creating a course- or project-specific copy.

## Shared versus dimension-specific knowledge

Shared concepts, such as signals and timers, live in [Foundations](/foundations/). When a node, type, or workflow changes between dimensions, separate pages belong in [2D Development](/2d/) and [3D Development](/3d/).

## Prerequisite links

Patterns begin with a **Prerequisites** section. It links only to concepts required to understand or implement the pattern. This gives the learner a clear route from a blocked feature to the missing knowledge.

## Related links

Pages finish with a small **Related** section that points to useful next concepts or patterns. Links should be purposeful, not exhaustive.

## Updating the site

The complete agent procedure is in the repository-root `AGENTS.md`. Before an agent adds a page, it searches the existing site, decides whether the topic is shared or 2D/3D-specific, creates self-contained evidence if needed, and runs the production build.
