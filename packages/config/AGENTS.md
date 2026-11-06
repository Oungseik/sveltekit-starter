# Config (`@repo/config`)

- `src/index.ts` is the public `.` export for shared constants, enums, and config values.
- Keep exports pure and portable; app settings and env loading belong elsewhere.
- Prefer plain TypeScript over dependencies. Add values only for multiple consumers or a clear domain-level need.

Checks: `pnpm --filter @repo/config check` (also `check-types`, `build`).
