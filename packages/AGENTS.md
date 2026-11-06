# Packages

- Shared packages must avoid website-specific behavior. Their `package.json` exports define public APIs.
- [config](config/AGENTS.md): portable constants/enums.
- [db](db/AGENTS.md): Drizzle/PostgreSQL client, schema, and migrations.
- [ui](ui/AGENTS.md): shared Svelte UI, styles, and utilities.

Use package-filtered checks locally (for example `pnpm --filter @repo/ui check`); use root Turbo checks when shared changes affect consumers.
