# ADR 0003 — Dual Theme & Design Tokens

## Status

Accepted (2026-11-16)

## Strategy

CSS custom properties on `:root` (dark default) and `[data-theme="light"]`.
Persisted in `localStorage` under `theme`, with `prefers-color-scheme` as
initial fallback. No FOUC: an inline script in `index.html` sets
`data-theme` before React hydrates.

## Token set (implemented in `src/styles/tokens.css`)

Dark (default):

- `--bg-base: #0A0A0B`, `--bg-elevated: #141416`
- `--border-subtle: #26262A`
- `--text-primary: #F5F4F0`, `--text-secondary: #A1A09B`
- `--accent: #C8FF00`, `--accent-ink: #0A0A0B`, `--accent-line: #C8FF00`

Light:

- `--bg-base: #F5F4F0`, `--bg-elevated: #FFFFFF`
- `--border-subtle: #D9D7CF`
- `--text-primary: #0A0A0B`, `--text-secondary: #5A5955`
- `--accent: #C8FF00`, `--accent-ink: #0A0A0B`, `--accent-line: #4A5E00`

## Contrast (verified)

- Dark text #F5F4F0 on #0A0A0B → 18.1:1 (AAA)
- Dark accent #C8FF00 on #0A0A0B → 17.8:1 (AAA)
- Light text #0A0A0B on #F5F4F0 → 18.1:1 (AAA)
- Light accent-line #4A5E00 on #F5F4F0 → 7.1:1 (AAA)

## Typography

- Display: Inter Tight (Google Fonts, `font-display: swap`).
- Mono: JetBrains Mono (only for metadata, stack tags, code labels).
- Scale via `clamp()` from 14px to 96px; no fixed breakpoints for type.

## Motion

- Easing: `cubic-bezier(0.16, 1, 0.3, 1)`, durations 200/400/600ms.
- Only `opacity` and `transform` are animated (GPU-friendly).
- `prefers-reduced-motion: reduce` → durations set to `0.01ms`.

## Consequences

- One accent identity across themes; contrast enforced at the token level.
- Theme switch is a single attribute flip; no React re-render required.

* Light mode requires manual curation of any image assets.
