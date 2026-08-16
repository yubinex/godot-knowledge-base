---
title: Collision layers and masks
description: Filter 2D physics interactions by configuring collision layers and masks.
sidebar:
  order: 2
---

# Collision layers and masks

Collision layers describe the categories an object belongs to. Collision masks describe the categories it checks for. Godot uses both to decide whether two physics objects can interact.

## A practical mental model

- **Layer:** “I am a collectible.”
- **Mask:** “I want to detect players.”

Name layers in **Project Settings → Layer Names → 2D Physics**, then enable the relevant bits for each physics node in the Inspector.

## Why use filtering?

Filtering prevents unrelated objects from triggering each other. A pickup can detect a player without responding to every pickup, enemy, or decoration in the game.

## Common pitfall

If an `Area2D` signal does not fire, verify all three things:

1. Both nodes have enabled collision shapes.
2. Their layers and masks overlap in the intended direction.
3. The required monitoring settings are enabled for the area.

## Related

- [Area2D](./area2d.md)
- [Collision-driven collectibles](../patterns/collision-driven-collectibles.md)
