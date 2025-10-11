# Svelte-Kit Starter

A modern SvelteKit monorepo with shared UI components and configuration.

## Overview

This is a monorepo project built with SvelteKit that follows modern development practices. It includes:

- **Website Application**: A SvelteKit application in the `apps/website` directory
- **Shared UI Components**: Reusable UI components in the `packages/ui` directory
- **Shared Configuration**: Common configuration values and enums in the `packages/config` directory
- **Internationalization**: Built-in support for multiple languages using @inlang/paraglide-js
- **Turbo**: For build system and task management
- **Biome**: For code formatting and linting
- **PNPM**: As the package manager

## Features

- ✅ **Svelte 5** - Latest version of the blazing fast UI framework
- ✅ **TypeScript** - Type-safe development
- ✅ **Tailwind CSS** - Utility-first styling
- ✅ **Internationalization** - Multi-language support with @inlang/paraglide-js
- ✅ **UI Components** - Pre-built, accessible components in `@repo/ui`
- ✅ **Modern Tooling** - Turbo, Biome, and PNPM for efficient development
- ✅ **Monorepo Architecture** - Shared code across multiple packages

## Prerequisites

- Node.js (v20 or higher recommended)
- PNPM (v10 or higher)
- Git

## Getting Started

### 1. Clone the repository

Click `Use this template` button on the right side or clone it as you want.

> Delete the `.git` directory if you clone this project directly.

### 2. Install dependencies

```bash
pnpm install
```

### 3. Development

To start the development server for the website:

```bash
pnpm dev
```

### 4. Other Commands

- **Build the project**: `pnpm build`
- **Run tests**: `pnpm test`
- **Check code**: `pnpm check`
- **Format code**: `pnpm format`
- **Check types**: `pnpm check-types`
- **Preview production build**: `pnpm preview`

Or update as your wish.

## Project Structure

```
├── apps/
│   └── website/          # SvelteKit application
├── packages/
│   ├── config/           # Shared configuration
│   └── ui/               # Shared UI components
├── package.json          # Root package.json with workspace configuration
├── pnpm-workspace.yaml   # PNPM workspace configuration
└── turbo.json            # Turbo configuration
```

### Apps

- `apps/website`: The main SvelteKit application

### Packages

- `packages/config`: Shared configuration, enums, and domain logic
- `packages/ui`: Reusable UI components built with Svelte

## Technologies

- [SvelteKit](https://kit.svelte.dev/) - Web application framework
- [Svelte 5](https://svelte.dev/) - Reactive UI framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [@inlang/paraglide-js](https://github.com/inlang/paraglide-js) - Internationalization solution
- [PNPM](https://pnpm.io/) - Fast, disk space efficient package manager
- [Turborepo](https://turbo.build/repo) - Build system
- [Biome](https://biomejs.dev/) - Formatter and linter
- [Vite](https://vitejs.dev/) - Build tool
- [shadcn-svelte](https://shadcn-svelte.com/) and [shadcn-svelte-extras](https://www.shadcn-svelte-extras.com/) - Component library
- [Lucide Svelte](https://lucide.dev/) - Icon library

## Development Workflow

### Adding a new workspace package

1. Create a new directory in the `packages/` folder
2. Initialize it with `pnpm init` or copy an existing package structure
3. Add the package to the workspaces in the root `package.json`

### Adding new UI components

To add new [shadcn-svelte](https://shadcn-svelte.com/) component

```bash
# To add shadcn-svelte component, run this in project root or
pnpm run shadcn <component name>

# Run this command in packages/ui directory
pnpm dlx shadcn-svelte@latest add <component name>
```

To add new [shadcn-svelte-extra](https://www.shadcn-svelte-extras.com/)

```bash
# To add shadcn-svelte-extra component, run this in project root or
pnpm run shadcn-extra <component name>

# install jsrepo globally and run this inside packages/ui directory
jsrepo add <component name>
```

Consult the documentation for the component name.

### Code Formatting and Linting

The project uses Biome for code formatting and linting. You can run:

```bash
pnpm check  # Check all files
pnpm format # Format all files
```

## Environment Variables

The website application may use environment variables. Check the `.env.example` file in the `apps/website` directory for required environment variables.

## Contributing

We welcome contributions from the community! Here's how you can help:

### Development Guidelines

1. **Fork the repository** and create your branch from `main`
2. **Install dependencies** with `pnpm install`
3. **Follow the code style** enforced by Biome
4. **Add tests** for any new features or bug fixes
5. **Update documentation** as needed

### Submitting a Pull Request

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Make your changes
3. Add tests if applicable
4. Run `pnpm check` to ensure code quality
5. Run `pnpm test` to ensure all tests pass
6. Commit your changes with conventional commit messages
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request with a clear title and description

### Code Style

This project uses Biome for consistent formatting and linting. Before committing, please run:

```bash
pnpm format  # Format all files
pnpm check   # Check for linting issues
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
