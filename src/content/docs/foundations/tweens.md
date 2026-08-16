---
title: Tweens
description: Animate a Godot property from code over time.
sidebar:
  order: 7
---

# Tweens

A tween changes a property over time. It is useful for small procedural effects that do not need a full `AnimationPlayer` animation.

## Animate a property

```gdscript
var tween := create_tween()
tween.set_trans(Tween.TRANS_SINE)
tween.tween_property($Sprite2D, "position:y", 4.0, 0.8)
tween.set_loops()
```

The target property can belong to a child visual rather than the root node. This is helpful when you want an item to bob visually without moving its collision shape.

## Common pitfall

An infinite loop should be intentional. Keep a reference or make sure the tween is owned by a node that is freed when the effect should end.

## Related

- [Removing nodes safely](./removing-nodes-safely.md)
- [Collision-driven collectibles](../patterns/collision-driven-collectibles.md)
