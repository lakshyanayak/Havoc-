# Shelter Scene

The Shelter screen background. It shows one of five room images depending on
the player's stats, and crossfades between them with a blur pulse when the
state changes.

## Files

| File | Location | Purpose |
|---|---|---|
| `ShelterScene.jsx` | `src/components/` | The component. Reads stats, picks the image, animates the swap |
| `shelterState.js` | `src/lib/` | `getShelterTier(stats)` and the `SHELTER_IMAGES` map |
| `tidy.webp`, `worn.webp`, `neglected.webp`, `desolate.webp` | `src/assets/shelter/` | The five room states |

## How it works

1. `ShelterScene` reads `energy`, `water` and `health` from the store.
2. `getShelterTier` averages them and returns a tier:

| Average | Tier |
|---|---|
| 90 and above | tidy |
| 40 to 89 | worn |
| 20 to 39 | neglected |
| below 20 | desolate |

3. The image for that tier fades in with a blur pulse (1.2s) while the old one fades out.
4. All five images are preloaded on mount so tier changes don't stutter.

## Dependencies

- `react`
- `framer-motion`
- The game store (`zustand`)
=======
# Havoc-
Havoc turns wellness tracking into gameplay. In a post-apocalyptic world, you complete daily habit-based missions — hydration, activity, sleep — to upgrade your shelter and keep your companion thriving. No more checklists that get abandoned: every real habit you build powers real progress in-game.
>>>>>>> e41d55263847daac1ceba79106b8c69634d46065
