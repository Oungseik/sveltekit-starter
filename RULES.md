# Engineering rules

For database/oRPC changes. Tooling: [AGENTS.md](AGENTS.md). Paths are repository-relative. Pin all `@orpc/*` dependencies to the same exact v2 beta; use installed [oRPC v2 APIs](https://orpc.dev/docs).

## Schema

- Drizzle `pgTable` in `packages/db/src/schema/`; camelCase TypeScript keys, explicit snake_case SQL names. Export via `@repo/db`.
- Shared domain enums/types: `@repo/config`; TypeScript enums/unions, no database enums.
- Preserve Better Auth adapter IDs, columns, nullability, indexes. Enforce foreign keys, uniqueness, delete behavior in SQL; mirror in `defineRelations`. `optional: false` only for guaranteed relations.
- Index query patterns; retain auth indexes. Choose ID/timestamp conventions per new domain.
- Schema changes: `db:generate`/`db:migrate`, new migrations; never rewrite applied migrations. Live DB commands require task need and valid root `.env`; reset data only on explicit request.

## Queries

- Use `src/lib/server/db.ts`; tables/operators from `@repo/db`, adding missing exports there.
- Reads: relational `db.query.<table>.findFirst/findMany`, inline `where`, `with` relations; no extracted predicates/condition arrays. Writes: `db.insert/update/delete`.
- Enforce ownership, visibility, state, related-row eligibility in SQL before limits/pagination; select needed columns only. Preserve distinct errors, idempotency, conditional write guards.
- Omit absent optional filters; retain required ownership/auth filters. Parameterize operators; escape wildcards for literal `ILIKE` searches.
- Bound collection reads; validate cursor/page size. Descending pagination: inclusive cursor, `pageSize + 1`, `{ items, nextCursor }`; withheld row becomes next cursor, `undefined` ends pagination. No OFFSET/page counters.

## oRPC handlers

- Export one self-contained procedure per handler in `apps/website/src/lib/server/orpc/handlers/`, using shared `os` from `base.ts`. Register in `router.ts`; preserve public paths; export `Router` type without codegen.
- Validate external input via ArkType/Standard Schema `.input(...)`; bound strings, arrays, pagination. Schemas spread into writes use `.onUndeclaredKey("delete")`.
- Declare expected errors, including helper errors, in `.errors({...})`; throw `errors.CODE(...)` for client inference. Validate structured error data; expose public messages/data only.
- Map custom error codes to HTTP statuses in the handler's `errorStatusMap`, preserving common defaults; errors themselves have no `status`.
- Handlers: validation, authorization, query/write, selected data. Infer outputs; no redundant `.output()` schemas/mapping layers. Return `Date` unchanged.
- Missing required resources: throw `NOT_FOUND`; optional absence: explicit field. No top-level `null`, failures disguised as success, or SvelteKit errors.

## oRPC middleware

- Reusable middleware uses shared base; declare expected errors before `.middleware(...)`. Auth middleware owns `UNAUTHORIZED`.
- Attach guards via `.use(...)`; verify session before protected handlers; narrow context with `return next({ context: { session } })`. Validate input before input-dependent authorization. Apply guards once; v2 does not deduplicate middleware.
- Resolve sessions in server hooks; pass `locals.session` to HTTP RPC context. Direct SSR calls need equivalent request context from a per-call provider.
- No request sessions/users/headers in globals. Shared RPC validation/errors belong in procedure base; HTTP normalization must preserve SSR contract.

## SSR with oRPC

- Import `orpc` from `#lib/orpc_client.ts`. Components use TanStack `createQuery`/`createInfiniteQuery`/`createMutation` with matching oRPC options; no direct RPC calls.
- Root `+layout.ts`: QueryClient per load, 60-second stale time, browser-only automatic queries. Never share SSR QueryClients across requests; local `enabled` conditions retain browser guard.
- Universal loads: `await parent()`, then await `queryClient.fetchQuery(orpc.*.queryOptions(...))`. Components match procedure/input/query keys; no duplicate application records from loads. Infinite/load-more lists are browser-only.
- SSR: direct server router client; browser: HTTP POST `/rpc`. Hooks install stateless `globalThis.$client`; resolve session/context per call.
- Preserve `RPCJsonSerializer.serializeJson/deserializeJson` for dehydration/hydration. Render escaped state via `createDehydratedScript` in root layout; no raw JSON in `{@html}`.
- Queries/mutations return domain data or reject; never cache safe-result envelopes. Handle declared errors with typed guards/callbacks, no casts. Route loads: map expected failures to SvelteKit `error`/`redirect`; rethrow unexpected errors.
- Mutations invalidate affected query keys via QueryClient. Use `mutate` with `onSuccess`/`onError`; mutation-level callbacks for concurrent work or work surviving unmount. Preserve unsaved forms during refetches. SvelteKit invalidation refreshes server-owned session data, not application queries.
