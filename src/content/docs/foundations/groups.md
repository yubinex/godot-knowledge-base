---
title: Groups
description: Label Godot nodes by gameplay role and query them with is_in_group().
sidebar:
  order: 4
---

# Groups

Groups are string labels assigned to nodes. They let code ask about an object's gameplay role rather than depend on its scene name or a hard-coded node path.

## Use groups for gameplay categories

Add a node to a group in the **Node → Groups** panel, then test it in code.

```gdscript
if other_area.is_in_group("healing_item"):
	add_health(health_pack_value)
elif other_area.is_in_group("gem"):
	add_gem()
```

This lets several scenes belong to the same category. A player can identify any future healing item without knowing which scene created it.

> [!warning]
> Group names are strings. A typo does not produce an error; it simply makes `is_in_group()` return `false`.

## Related

- [Area2D](../2d/area2d.md)
- [Collision-driven collectibles](../patterns/collision-driven-collectibles.md)
