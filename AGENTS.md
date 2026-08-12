# DOX framework

- DOX is highly performant AGENTS.md hierarchy installed here
- Agent must follow DOX instructions across any edits

## Core Contract

- AGENTS.md files are binding work contracts for their subtrees
- Work products, source materials, instructions, records, assets, and durable docs must stay understandable from the nearest applicable AGENTS.md plus every parent AGENTS.md above it

## Read Before Editing

1. Read the root AGENTS.md
2. Identify every file or folder you expect to touch
3. Walk from the repository root to each target path
4. Read every AGENTS.md found along each route
5. If a parent AGENTS.md lists a child AGENTS.md whose scope contains the path, read that child and continue from there
6. Use the nearest AGENTS.md as the local contract and parent docs for repo-wide rules
7. If docs conflict, the closer doc controls local work details, but no child doc may weaken DOX

Do not rely on memory. Re-read the applicable DOX chain in the current session before editing.

## Update After Editing

Every meaningful change requires a DOX pass before the task is done.

Update the closest owning AGENTS.md when a change affects:

- purpose, scope, ownership, or responsibilities
- durable structure, contracts, workflows, or operating rules
- required inputs, outputs, permissions, constraints, side effects, or artifacts
- user preferences about behavior, communication, process, organization, or quality
- AGENTS.md creation, deletion, move, rename, or index contents

Update parent docs when parent-level structure, ownership, workflow, or child index changes. Update child docs when parent changes alter local rules. Remove stale or contradictory text immediately. Small edits that do not change behavior or contracts may leave docs unchanged, but the DOX pass still must happen.

## Hierarchy

- Root AGENTS.md is the DOX rail: project-wide instructions, global preferences, durable workflow rules, and the top-level Child DOX Index
- Child AGENTS.md files own domain-specific instructions and their own Child DOX Index
- Each parent explains what its direct children cover and what stays owned by the parent
- The closer a doc is to the work, the more specific and practical it must be

## Child Doc Shape

- Create a child AGENTS.md when a folder becomes a durable boundary with its own purpose, rules, responsibilities, workflow, materials, or quality standards
- Work Guidance must reflect the current standards of the project or user instructions; if there are no specific standards or instructions yet, leave it empty
- Verification must reflect an existing check; if no verification framework exists yet, leave it empty and update it when one exists

Default section order:
- Purpose
- Ownership
- Local Contracts
- Work Guidance
- Verification
- Child DOX Index

## Style

- Keep docs concise, current, and operational
- Document stable contracts, not diary entries
- Put broad rules in parent docs and concrete details in child docs
- Prefer direct bullets with explicit names
- Do not duplicate rules across many files unless each scope needs a local version
- Delete stale notes instead of explaining history
- Trim obvious statements, repeated rules, misplaced detail, and warnings for risks that no longer exist

## Closeout

1. Re-check changed paths against the DOX chain
2. Update nearest owning docs and any affected parents or children
3. Refresh every affected Child DOX Index
4. Remove stale or contradictory text
5. Run existing verification when relevant
6. Report any docs intentionally left unchanged and why

## User Preferences

When the user requests a durable behavior change, record it here or in the relevant child AGENTS.md

## Project Scope

- This is a pnpm/Turborepo SvelteKit monorepo.
- Root files own workspace tooling, dependency policy, shared verification commands, environment examples, and DOX hierarchy.
- Runtime application work lives under `apps/`.
- Shared workspace packages live under `packages/`.

## Ownership

- Root owns `package.json`, `pnpm-workspace.yaml`, `turbo.json`, `biome.json`, `flake.*`, `.env.example`, and top-level documentation.
- `apps/AGENTS.md` owns app workspace rules and indexes runnable applications.
- `packages/AGENTS.md` owns shared package rules and indexes reusable packages.
- Generated/cache/output directories such as `.turbo/`, `.svelte-kit/`, `build/`, `dist/`, and `node_modules/` are tool output, not source contracts.

## Local Contracts

- Use pnpm workspace commands from the root unless a package-local script is intentionally narrower.
- Keep secrets out of docs and source. `.env.example` documents required variables; local `.env` files hold real values.
- Root Turbo tasks define cross-package command names; update `turbo.json` when adding durable workspace scripts that should run through Turbo.
- In SvelteKit code, use static environment imports for required variables and dynamic imports only for optional variables.
- Svelte packages use TypeScript 6 for framework compatibility; non-Svelte TypeScript packages use TypeScript 7 for faster checks when supported.
- Use tsdown for non-Svelte package builds.
- Biome is the root formatter/linter baseline. Child configs may narrow file includes for their toolchains.

## Work Guidance

- Prefer existing workspace packages before adding new dependencies or utilities.
- Keep app-specific runtime behavior in `apps/website`; keep reusable UI, database, and shared config in their packages.
- When adding a new durable app or package, add or update the nearest AGENTS.md and refresh the parent Child DOX Index in the same change.

## Verification

- Root checks: `pnpm check`, `pnpm check-types`, `pnpm test`, `pnpm build`.
- Formatting: `pnpm format`.
- Database commands require a valid root `.env`: `pnpm db:generate`, `pnpm db:migrate`, `pnpm db:push`, `pnpm db:studio`.

## Child DOX Index

- `apps/AGENTS.md` - runnable applications; currently indexes `apps/website`.
- `packages/AGENTS.md` - reusable workspace packages; currently indexes `packages/config`, `packages/db`, and `packages/ui`.
