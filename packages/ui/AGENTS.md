# UI (`@repo/ui`)

- Shared Svelte components/styles/assets: `src/lib/`, `src/app.css`, and `static/`. Apps own page composition and theme overrides.
- Exports: `./*` component entry points, `./css` shared CSS, `./styles/*` style files. Preserve public paths.
- Reuse `cn` and component utility types in `src/lib/utils.ts`; keep shared components generic.
- `components.json` and `jsrepo.config.ts` control generated shadcn-svelte/extras placement.
- `src/routes/+page.svelte` is an empty compatibility route for SvelteKit's generated path types.

Check: `pnpm --filter @repo/ui check`.
