# Database (`@repo/db`)

- Owns the Drizzle/PostgreSQL connector, `src/schema/`, `migrations/`, `drizzle.config.ts`, and database config/polyfills. App integration belongs in `apps/website`.
- Public API: `connectDb(dbURL)` and schema exports through `src/index.ts`.
- Pair schema changes with new migrations; never rewrite applied migrations. Keep Better Auth tables compatible with `apps/website/src/lib/auth.ts`.
- `with-env` uses `dotenv-cli` to load/expand root `.env` and owns the `dotenv` executable.
- `compression.polyfill.ts` supports Drizzle Studio under Bun.
- Build JavaScript only: tsdown cannot bundle the Drizzle RC Bun SQL declarations; exported source TypeScript supplies types.
- Run live `db:push`, `db:migrate`, or `db:studio` only when required and env is available.

Checks: `pnpm --filter @repo/db check` (also `check-types`, `build`). Schema tools: `pnpm db:generate`, `pnpm db:migrate`, `pnpm db:push`, `pnpm db:studio`.
