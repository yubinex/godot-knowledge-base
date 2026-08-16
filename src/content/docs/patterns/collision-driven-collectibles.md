---
title: Collision-driven collectibles
description: Build reusable 2D pickups that apply an effect and remove themselves on collection.
sidebar:
  order: 1
---

# Collision-driven collectibles

Use this pattern when a player should collect items such as coins, gems, health packs, or energy packs by overlapping them.

## Prerequisites

- [Signals](../foundations/signals.md)
- [Groups](../foundations/groups.md)
- [Area2D](../2d/area2d.md)
- [Collision layers and masks](../2d/collision-layers-and-masks.md)
- [Removing nodes safely](../foundations/removing-nodes-safely.md)

## Pattern

Give the pickup an `Area2D`, a visible child, a `CollisionShape2D`, and a semantic group such as `coin` or `healing_item`.

The player owns player state and decides the effect:

```gdscript
func _on_area_entered(other_area: Area2D) -> void:
	if other_area.is_in_group("coin"):
		set_coins(coins + 1)
	elif other_area.is_in_group("healing_item"):
		set_health(health + healing_amount)
```

The collectible owns its own lifetime:

```gdscript
func _on_area_entered(_other_area: Area2D) -> void:
	queue_free()
```

## Why split responsibilities?

The pickup can stay reusable because it does not need to know where the player's UI lives. The player keeps the rules for health, score, inventory, and other player state.

> [!warning]
> Pick one owner for each state change. If both the item and player increment the score, a collection may be counted twice.

## Related

- [Synchronizing game state and UI](../systems/state-and-ui.md)
- [Random collectible spawning](./random-collectible-spawning.md)
- [Tweens](../foundations/tweens.md)
