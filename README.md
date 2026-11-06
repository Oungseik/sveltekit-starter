# Svelte-Kit Starter

A SvelteKit 3 monorepo with shared UI components and configuration.

## Overview

- **Website Application**: SvelteKit app in `apps/website`
- **Shared UI Components**: Reusable components in `packages/ui`
- **Shared Configuration**: Common config and enums in `packages/config`
- **Internationalization**: Multi-language support via @inlang/paraglide-js
- **Tooling**: Turbo, Oxc, PNPM

## Explore with LLM

Before diving into the code, paste the project structure or this README into your LLM of choice. It'll help you quickly understand the monorepo layout, conventions, resources and where things live so you can start building faster.

## Getting Started

**Prerequisites**: Node.js v24.15+ (24 LTS), PNPM v12.18.0 (pinned in `package.json`)

```bash
# Clone (click "Use this template" or clone directly)
# Delete the .git directory if cloning directly

# Install dependencies
pnpm install

# Start dev server
pnpm dev
```

**Other commands**: `pnpm build`, `pnpm test`, `pnpm check`, `pnpm lint`, `pnpm format`, `pnpm check-types`, `pnpm preview`

## Project Structure

```
├── apps/
│   └── website/          # SvelteKit application
├── packages/
│   ├── config/           # Shared configuration
│   └── ui/               # Shared UI components
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

## Technologies

- [SvelteKit](https://kit.svelte.dev/) / [Svelte 5](https://svelte.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [@inlang/paraglide-js](https://github.com/inlang/paraglide-js)
- [PNPM](https://pnpm.io/) / [Turborepo](https://turbo.build/repo) / [Oxc](https://oxc.rs/) / [Vite](https://vitejs.dev/)
- [shadcn-svelte](https://shadcn-svelte.com/) + [shadcn-svelte-extras](https://www.shadcn-svelte-extras.com/)
- [Lucide Svelte](https://lucide.dev/)

## Adding UI Components

```bash
# shadcn-svelte (from project root)
pnpm run shadcn <component name>

# shadcn-svelte-extras (from project root)
pnpm run shadcn-extra <component name>
```

Consult the documentation for component names.

## Environment Variables

Copy the root `.env.example` to a root `.env`. The website loads this file via
`env.dir` in `apps/website/vite.config.ts`; database tools use it too.

Variables are declared in `apps/website/src/env.ts` using SvelteKit 3's
[`defineEnvVars`](https://svelte.dev/docs/kit/environment-variables):

- `BETTER_AUTH_SECRET` and `DATABASE_URL` are required private build-time values,
  imported from `$app/env/private`. Changing them requires rebuilding.
- `PUBLIC_ENVIRONMENT` is an optional public runtime value, imported from
  `$app/env/public`. Setting it to `development` disables oRPC batching; leaving it
  unset enables batching. Production deployments supply runtime values through
  their hosting environment.

SvelteKit configuration lives in each workspace's `vite.config.ts`. Internal
imports use `#lib/*` with file extensions (for example, `#lib/orpc_client.ts`). See
the [SvelteKit 3 migration guide](https://svelte.dev/docs/kit/migrating-to-sveltekit-3)
for the complete list of breaking changes.

External JSON clients calling `/rpc` should send `Content-Type: application/json`.
SvelteKit 3 rejects cross-origin mutating requests that omit a content type.

## Resources

- [shadcn-svelte](https://www.shadcn-svelte.com/) - Component library
- [shadcn-svelte-extras](https://www.shadcn-svelte-extras.com/) - Additional components
- [svelte-ai-elements](https://svelte-ai-elements.vercel.app/) - AI-powered Svelte elements

## License

MIT - see [LICENSE](LICENSE)
