---
title: GDQuest M05 — Loot It All
description: Self-contained evidence summary for the first inspected GDQuest workbook.
sidebar:
  order: 1
---

# GDQuest M05 — Loot It All

## What was inspected

A learner-provided GDQuest workbook was statically inspected on 2026-08-16. It builds a small top-down space collection game and practice exercises that progress through overlap detection, UI updates, groups, target movement, and random spawning.

## What it demonstrated

- A ship moving from named input actions with velocity steering and screen wrapping.
- Collectible `Area2D` nodes detected through overlap signals and differentiated with groups.
- Health, energy, and count displays updated from gameplay state.
- Timers driving repeated health changes and random item spawning.
- Reusable scenes instantiated as randomized collectibles.
- Small floating animations created with tweens.

## Verification status

The source was inspected statically. It was not run in this documentation task, so the site does not claim runtime verification of the workbook's behavior.

## Knowledge extracted

- [Signals](../foundations/signals.md)
- [Groups](../foundations/groups.md)
- [Timers](../foundations/timers.md)
- [Area2D](../2d/area2d.md)
- [Collision-driven collectibles](../patterns/collision-driven-collectibles.md)
- [Random collectible spawning](../patterns/random-collectible-spawning.md)
- [Steering-based 2D movement](../patterns/steering-based-2d-movement.md)
