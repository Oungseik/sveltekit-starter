# Apps

## Purpose

- Own runnable products in the monorepo.
- Keep application-specific routing, app shell behavior, runtime configuration, and deployment-facing assets under each app.

## Ownership

- `apps/website/AGENTS.md` owns the current SvelteKit website application.
- Root AGENTS.md owns workspace tooling, root environment examples, and cross-package scripts.
- Shared code belongs in `packages/` when it is reused outside one app.

## Local Contracts

- Each app must have its own AGENTS.md once it has source code or app-specific workflow.
- Build output, framework caches, and local installs under app folders are generated artifacts.
- App package scripts may use app-specific tooling, but root Turbo task names should stay aligned with durable app scripts.

## Work Guidance

- Keep changes inside the owning app unless code is genuinely shared.
- Prefer package imports from `@repo/*` over relative imports across workspace boundaries.

## Verification

- Use root Turbo commands for cross-workspace checks.
- Use app-filtered commands for local app work, for example `pnpm --filter website check`, `pnpm --filter website test`, and `pnpm --filter website build`.

## Child DOX Index

- `apps/website/AGENTS.md` - SvelteKit website app, including routes, hooks, oRPC, auth integration, i18n, and app-local styling.
