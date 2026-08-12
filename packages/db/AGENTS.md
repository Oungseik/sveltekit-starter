# Database Package

## Purpose

- Shared PostgreSQL database package using Drizzle ORM.
- Owns schema definitions, relations, migrations, and the exported database connector.

## Ownership

- Owns `src/index.ts`, `src/schema/`, `migrations/`, `drizzle.config.ts`, `compression.polyfill.ts`, and package TypeScript config.
- `apps/website` owns request-time usage of the database through its server modules.
- Root owns `.env.example`; database scripts read real values from the root `.env`.

## Local Contracts

- `connectDb(dbURL)` is the package entry point for creating a Drizzle client.
- Schema exports are part of the package API through `src/index.ts`.
- Migrations are durable database artifacts; generate new migrations for schema changes instead of rewriting applied migrations.
- `compression.polyfill.ts` supports Drizzle Studio under Bun.
- Use TypeScript 7 for type checking and tsdown for builds.
- The Drizzle RC Bun SQL declarations cannot currently be bundled by tsdown, so the package build emits JavaScript only; source TypeScript remains the exported type contract.

## Work Guidance

- Keep Better Auth table changes compatible with the auth setup in `apps/website/src/lib/auth.ts`.
- Pair schema changes with migrations when the database shape changes.
- Do not run push/migrate/studio commands unless the task needs a live database and env is available.

## Verification

- `pnpm --filter @repo/db check`
- `pnpm --filter @repo/db check-types`
- `pnpm --filter @repo/db build`
- Database operations when needed: `pnpm --filter @repo/db db:generate`, `pnpm --filter @repo/db db:migrate`, `pnpm --filter @repo/db db:push`, `pnpm --filter @repo/db db:studio`.

## Child DOX Index

- None.
