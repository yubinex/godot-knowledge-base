---
title: Synchronizing game state and UI
description: Keep gameplay values and their Godot UI displays synchronized through dedicated update methods.
sidebar:
  order: 1
---

# Synchronizing game state and UI

Gameplay state and its display should change together through one focused method. This makes it harder for a health value, score, or resource count to drift away from what the player sees.

## Keep the update in one place

```gdscript
var health := 100

func set_health(new_health: int) -> void:
	health = max(new_health, 0)
	$UI/HealthBar.value = health
```

Gameplay code calls `set_health()` rather than directly changing both `health` and the progress bar in many places.

## Why it matters

Centralized updates make it easier to add clamping, effects, sounds, or game-over behavior later. They also make the source of truth clear: the variable is state; the UI represents it.

## Related

- [Collision-driven collectibles](../patterns/collision-driven-collectibles.md)
- [Signals](../foundations/signals.md)
