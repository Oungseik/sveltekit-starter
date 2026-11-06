# Apps

- Apps own routes, shells, runtime config, and deployment assets; reusable behavior belongs in `packages/`.
- [website](website/AGENTS.md) is the SvelteKit application.

Use root Turbo checks across workspaces; for app-only work run `pnpm --filter website check` (also `test`, `build`, `lint`).
