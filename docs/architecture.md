# Architecture Overview

## System shape

```mermaid
flowchart TB
    HTML[index.html] --> Router[React Router v7]
    Router --> Shell[Shell + SkipLink + Header + Footer]
    Shell --> Outlet[Suspense + Outlet]
    Outlet --> Features[features/*]
    Features -.reads.-> Content[(src/content)]
    HTML -.loads.-> Tokens[(src/styles)]
```

## Folder contract

- `src/app/` - router and providers.
- `src/components/ui/` - presentational atoms.
- `src/components/layout/` - Shell, Header, Footer.
- `src/features/` - one folder per route.
- `src/content/` - typed data source (the contract).
- `src/lib/` - pure utilities.
- `src/styles/` - tokens, reset, global.
- `docs/adr/` - Architecture Decision Records.
- `scripts/` - build-time helpers.
