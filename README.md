# Vellum Design System

A React 19 component library styled after the *Rime of the Frostmaiden* campaign — aged parchment in the light, frozen night in the dark.

**Storybook →** [seyo.github.io/vellum-ds](https://seyo.github.io/vellum-ds)

---

## Using the library

Install from a tagged GitHub release:

```bash
npm install https://github.com/Seyo/vellum-ds/releases/download/v0.1.0/vellum-ds-v0.1.0.tar.gz
```

Import the styles once in your app entry (required):

```ts
import '@seyo/vellum-ds/styles'
```

Then use components:

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent, Badge } from '@seyo/vellum-ds'

export function QuestCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>The Long Dark</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-2">
        <Badge variant="tertiary">Legendary</Badge>
        <Button variant="tertiary">Accept Quest</Button>
      </CardContent>
    </Card>
  )
}
```

### Peer dependencies

```bash
npm install react@^19 react-dom@^19
```

---

## Components

| Component | Description |
|---|---|
| `Button` | 7 variants including the Vellum-specific `tertiary` (gold) |
| `Input` | Parchment-styled text input |
| `Badge` | Inline label with `default`, `secondary`, `tertiary`, `outline`, `destructive` variants |
| `Card` | Surface container with `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter` |
| `Dialog` | Modal overlay with portal rendering |
| `Select` | Radix-powered dropdown with grouped items |
| `Tooltip` | Hover overlay — wrap your app with `TooltipProvider` |
| `Typography` | Semantic text component with `h1`–`h4`, `lead`, `body`, `muted`, `code` variants |

---

## Design tokens

Tokens are CSS custom properties defined in `dist/style.css`. Override them on `:root` to customise.

| Token | Light | Dark |
|---|---|---|
| `--color-background` | `#e8e0cf` (parchment) | `#171e2b` (night) |
| `--color-dark` | `#1b2033` (ink) | `#e4ecf2` |
| `--color-secondary` | `#567b92` (frost blue) | `#8cc5df` |
| `--color-tertiary` | `#9a7b3a` (gold) | `#d4b26a` |
| `--font-heading` | IM Fell DW Pica SC | |
| `--font-body` | EB Garamond | |
| `--font-mono` | IBM Plex Mono | |

Dark mode activates via the `.dark` class on `<html>` or `prefers-color-scheme: dark`.

---

## Development

```bash
npm install
npm run dev          # Storybook at localhost:6006
npm test             # Vitest watch
npm run build        # Build library → dist/
npm run build-storybook  # Build static Storybook → storybook-static/
```

### Adding a component

1. Create `src/components/<name>.tsx` with the component
2. Add `src/components/<name>.stories.tsx` with at least a `Default` story tagged `['autodocs']`
3. Add `src/components/<name>.test.tsx` with unit tests
4. Export from `src/components/index.ts`

---

## Releases

Tag a version to publish a GitHub Release with built artifacts:

```bash
git tag v0.2.0
git push origin v0.2.0
```

The `release.yml` workflow runs tests, builds the library, and attaches `.zip` and `.tar.gz` archives to the release.
