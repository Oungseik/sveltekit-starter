---
name: create-shared-package
description: Add utility or module to shared packages. Use for monorepo reusability.
argument-hint: [package-name] [type]
allowed-tools: Write, Edit
---

Create new package in packages/ for cross-app sharing.

Create:
- New directory in `packages/`
- Basic package.json with exports
- TypeScript types and implementation
- Update pnpm-workspace.yaml if needed
- Turbo config for build tasks

Package conventions:
- Use `@repo/` scope for imports
- Define clear entry points in package.json
- Include TypeScript definitions
- Follow monorepo build dependencies

Reference [template.md](template.md) for package.json.