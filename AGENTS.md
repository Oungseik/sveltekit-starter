# Project

- pnpm/Turborepo SvelteKit monorepo: [apps](apps/AGENTS.md) contain runnable applications; [packages](packages/AGENTS.md) contain shared UI, database, and config.
- Follow [RULES.md](RULES.md) for schema, queries, oRPC handlers/middleware, and SSR conventions.
- Root owns workspace tooling/config, `flake.*`, `.env.example`, and top-level docs. Treat `node_modules/`, `.turbo/`, `.svelte-kit/`, `build/`, and `dist/` as generated.
- Reuse workspace packages before adding dependencies or utilities. Keep website-specific code in `apps/website`; import across workspaces through package names/public exports and add dependencies where used.
- Use the root-pinned pnpm from the repository root; use package filters for narrower checks. Keep pnpm settings in `pnpm-workspace.yaml` (`engineStrict`, `allowBuilds`) and align workspace scripts with root Turbo tasks.
- Keep secrets in local `.env` files, never source/docs; document variables in root `.env.example`. In SvelteKit, use static imports for required env variables and dynamic imports for optional ones.
- Svelte packages use TypeScript 6 for svelte-check and alias TypeScript 7 as `@typescript/native` for `--tsgo-experimental-api`. Other TypeScript packages use TypeScript 7; non-Svelte builds use tsdown.
- Only Oxlint/Oxfmt for lint/format. No ESLint or Prettier packages, plugins, configs, or suppression comments. Oxlint-compatible JS plugins are allowed; local configs may narrow scope.
- Oxlint covers JS/TS/TSX and Svelte scripts; `@shadcn/lint` applies only to Svelte scripts, not markup. Use `pnpm check` (svelte-check) for template/type correctness.
- Keep agent guidance concise; no mandatory documentation passes or fixed templates.

Checks: `pnpm check`, `pnpm check-types`, `pnpm test`, `pnpm build`. Run `pnpm lint` after changes; format with `pnpm format`.

Database commands require a valid root `.env`: `pnpm db:generate`, `pnpm db:migrate`, `pnpm db:push`, `pnpm db:studio`.
