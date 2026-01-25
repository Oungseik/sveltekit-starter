---
name: scaffold-auth-route
description: Create a new auth-protected route with server-side validation. Use for user-facing pages needing authentication.
argument-hint: [route-path] [component-name]
disable-model-invocation: false
allowed-tools: Edit, Write
---

Generate a new authenticated SvelteKit route following repo patterns.

Create:
- `+page.svelte` with SNUGGLE components and {#await} for data fetching
- `+page.server.ts` with session validation using Better Auth
- Proper error handling for unauthenticated users

Route conventions:
- Use kebab-case naming (e.g., /my-dashboard)
- Check session in load function: `ctx.locals.session`
- Redirect to login if no session
- Use Svelte 5 runes like $props for props
- Integrate with Tailwind/shadcn for consistent UI

Reference [template.md](template.md) for route files.