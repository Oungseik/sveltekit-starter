# Config Package

## Purpose

- Shared domain constants, enums, and configuration values for workspace packages and apps.

## Ownership

- Owns `src/index.ts`, `package.json`, and TypeScript config for `@repo/config`.
- Does not own runtime environment loading or app-specific settings.

## Local Contracts

- Public API is the `.` export mapped to `src/index.ts`.
- Keep exports pure and portable across browser, server, and package contexts unless a consumer explicitly requires otherwise.

## Work Guidance

- Avoid dependencies here unless a shared value cannot be represented with plain TypeScript.
- Add values only when at least two workspace consumers need the same contract or a value is clearly domain-level.

## Verification

- `pnpm --filter @repo/config check`
- `pnpm --filter @repo/config check-types`
- `pnpm --filter @repo/config build`

## Child DOX Index

- None.
