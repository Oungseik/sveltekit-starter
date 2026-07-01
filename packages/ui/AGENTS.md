# UI Package

## Purpose

- Shared Svelte UI package for reusable components, styles, assets, and UI helpers.

## Ownership

- Owns `src/lib/`, `src/app.css`, `components.json`, `jsrepo.config.ts`, `static/`, and package Svelte/Vite config.
- Apps own app-specific page composition and app theme overrides.

## Local Contracts

- Package exports expose shadcn-style component entry points with `./*`, shared CSS with `./css`, and style files with `./styles/*`.
- `src/lib/utils.ts` provides the shared `cn` helper and Svelte component utility types.
- `components.json` and `jsrepo.config.ts` control generated shadcn-svelte and shadcn-svelte-extras placement.

## Work Guidance

- Reuse existing UI helpers before adding new styling utilities.
- Keep shared components generic enough for more than one app; keep website-only UI in `apps/website`.
- Preserve exported component paths when moving files.

## Verification

- `pnpm --filter @repo/ui check`

## Child DOX Index

- None.
