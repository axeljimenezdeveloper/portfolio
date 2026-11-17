# ADR 0002 — Architecture, Routing & Content Model

## Status

Accepted (2026-11-16)

## Information Architecture

- `/` Hero + curated showreel + statement
- `/work` Curated index (not infinite grid)
- `/work/:slug` Case study — Problem → Architecture decision → Result
- `/about` Profile, timeline, stack, education
- `/privacy` Legal page, same visual treatment as the rest
- `*` NotFound route (404)

## Routing strategy

- React Router v7 (data mode) with `lazy()` per route.
- Route-level `<Suspense>` boundary inside the Shell (Header and Footer stay
  mounted during navigation; only the Outlet content swaps).
- `404.html` shim for GitHub Pages SPA fallback.
- `base` path resolved from `VITE_BASE_PATH` at build time.

## Content model (the "API contract")

All content is typed. Components never read raw objects from JSX — they
consume typed data via `src/content/`.

`src/content/schema.ts` defines `Project`, `Profile`, `TimelineEntry`,
`EducationEntry`, `LanguageEntry`, `LegalSection`, `ProjectStatus`.

Migration path: if a CMS is adopted, replace `src/content/*.ts` with a
fetcher that returns the same types. Components remain untouched.

## Component boundaries

- `components/ui/*` Presentational atoms. No data fetching, no routing.
- `components/layout/*` Shell, Header, Footer, ThemeToggle, SkipLink.
- `features/*/` Route-level composition. May read content.
- `lib/*` Pure utilities (theme persistence, SEO meta, cx()).

## UX states (Frontend Agent compliance)

- Loading: route-level Suspense fallback (aria-live="polite").
- Error: route-level errorElement (added in Phase 3 with real components).
- Empty: N/A — content is compile-time typed; no empty list can render.

## Accessibility

- Semantic landmarks (`header`, `main`, `nav`, `footer`).
- Skip-to-content link as the first focusable element.
- `:focus-visible` ring using `--accent` token.
- `prefers-reduced-motion` respected globally in `tokens.css`.
- All interactive atoms tested for keyboard navigation in Phase 3.

## Security (Frontend Agent compliance)

- No auth, no tokens, no user input, no HTML injection surface.
- Zero use of `dangerouslySetInnerHTML`.
- External links use `rel="noopener noreferrer"`.
- No forms; contact via `mailto:` and GitHub link only.

## Consequences

- Components are theme-, locale- and source-agnostic.
- Content edits never touch component files.

* Schema changes require a TypeScript update (intentional — it is the contract).
