# Svelte-Kit Starter

A modern SvelteKit monorepo with shared UI components and configuration.

## Overview

- **Website Application**: SvelteKit app in `apps/website`
- **Shared UI Components**: Reusable components in `packages/ui`
- **Shared Configuration**: Common config and enums in `packages/config`
- **Internationalization**: Multi-language support via @inlang/paraglide-js
- **Tooling**: Turbo, Biome, PNPM

## Explore with LLM

Before diving into the code, paste the project structure or this README into your LLM of choice. It'll help you quickly understand the monorepo layout, conventions, resources and where things live so you can start building faster.

## Getting Started

**Prerequisites**: Node.js v20+, PNPM v10+

```bash
# Clone (click "Use this template" or clone directly)
# Delete the .git directory if cloning directly

# Install dependencies
pnpm install

# Start dev server
pnpm dev
```

**Other commands**: `pnpm build`, `pnpm test`, `pnpm check`, `pnpm format`, `pnpm check-types`, `pnpm preview`

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
- [PNPM](https://pnpm.io/) / [Turborepo](https://turbo.build/repo) / [Biome](https://biomejs.dev/) / [Vite](https://vitejs.dev/)
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

Check `.env.example` in `apps/website` for required environment variables.

## Resources

- [shadcn-svelte](https://www.shadcn-svelte.com/) - Component library
- [shadcn-svelte-extras](https://www.shadcn-svelte-extras.com/) - Additional components
- [svelte-ai-elements](https://svelte-ai-elements.vercel.app/) - AI-powered Svelte elements

## License

MIT - see [LICENSE](LICENSE)
