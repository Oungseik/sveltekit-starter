# Website App

## Purpose

- SvelteKit application for the website.
- Owns browser/server routes, hooks, app shell, oRPC endpoint wiring, auth integration, rate limiting, i18n, and app-level theme CSS.

## Ownership

- Owns `src/routes/`, `src/lib/`, `src/hooks.ts`, `src/hooks.server.ts`, `src/app.*`, `static/`, `i18n/`, `project.inlang/`, and app-local tool configs.
- Does not own shared UI primitives, database schema/client code, or cross-package constants; use `packages/ui`, `packages/db`, and `packages/config`.
- Root owns `.env.example`; app runtime env is loaded from the monorepo root via `vite.config.ts`.

## Local Contracts

- `$lib` is app-local. `@lib` is aliased to `../../packages/ui/src/lib` for shared UI internals.
- oRPC procedures are collected in `src/lib/server/orpc/router.ts` and exposed by `src/routes/rpc/[...rest]/+server.ts`.
- Server database access goes through `src/lib/server/db.ts`, which calls `@repo/db`.
- Better Auth setup lives in `src/lib/auth.ts`; the session shape used by SvelteKit locals is declared in `src/app.d.ts`.
- Paraglide output under `src/lib/paraglide/` is generated from `project.inlang/` and `i18n/`; prefer editing source messages/settings over generated files.

## Work Guidance

- Use SvelteKit conventions for route files and keep server-only code under `src/lib/server`.
- Put app-only styling and theme tokens in `src/app.css`; move reusable component styling to `packages/ui`.
- Keep oRPC validation/error behavior at the route endpoint or shared oRPC base so handlers stay small.

## Verification

- `pnpm --filter website check`
- `pnpm --filter website test`
- `pnpm --filter website build`
- `pnpm --filter website lint`

## Child DOX Index

- None.
