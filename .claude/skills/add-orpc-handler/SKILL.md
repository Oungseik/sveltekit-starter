---
name: add-orpc-handler
description: Generate a new ORPC handler with router update and client code. Use for adding API endpoints or server procedures.
argument-hint: [handler-name] [domain]
disable-model-invocation: true
allowed-tools: Edit, Write
---

Generate a new ORPC procedure handler for the backend server layer.

Use this skill to add new API endpoints following the repo's ORPC pattern for type-safe RPC calls.

Create:
- Handler file in `apps/website/src/lib/server/orpc/handlers/{domain}/`
- Update `router.ts` to register the new procedure
- Generate client stubs for type-safe frontend calls
- Integrate with existing middleware (auth, rate limiting)

## Current API Structure
- Existing handlers: !`find apps/website/src/lib/server/orpc/handlers -name "*.ts" | wc -l` total
- Router structure: !`grep -A 10 "export const router" apps/website/src/lib/server/orpc/router.ts || echo "Router not found"`

Handler conventions:
- Use type-safe inputs/outputs from `$repo/orpc`
- Import db from `@repo/db` if queries needed
- Throw ORPCError for auth/validation failures (e.g., `new ORPCError("UNAUTHORIZED")`)
- Follow async/await pattern
- Add rate limiting where appropriate

## Generated Structure
- Handler: `apps/website/src/lib/server/orpc/handlers/{$DOMAIN}/$HANDLER_NAME.ts`
- Router update: Register handler in `router.ts`
- Client export: Type-safe frontend callable

Reference [template.md](template.md) for handler skeleton.
See [examples.md](examples.md) for health_check sample.