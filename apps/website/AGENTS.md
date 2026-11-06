# Website (SvelteKit)

- Owns `src/`, `static/`, `i18n/`, `project.inlang/`, and app-local configs; shared UI/database/config live in `packages/`.
- `#lib` is the app import alias; consume shared UI through `@repo/ui`.
- Follow SvelteKit route conventions. Keep server-only code in `src/lib/server/`; database access goes through `src/lib/server/db.ts` → `@repo/db`.
- oRPC router: `src/lib/server/orpc/router.ts`; endpoint: `src/routes/rpc/[...rest]/+server.ts`. Keep validation/error handling in the endpoint or shared base.
- Better Auth: `src/lib/auth.ts`; locals/session types: `src/app.d.ts`.
- Paraglide output in `src/lib/paraglide/` is generated; edit `project.inlang/` and `i18n/` instead.
- App styles/theme: `src/app.css`; reusable component styling: `packages/ui`.
- `vite.config.ts` loads env from the repository root; root owns `.env.example`.

Checks: `pnpm --filter website check` (also `test`, `build`, `lint`).
