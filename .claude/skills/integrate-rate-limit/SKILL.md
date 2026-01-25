---
name: integrate-rate-limit
description: Add rate limiting protection to endpoints. Use for throttling API requests.
argument-hint: [endpoint] [rate]
allowed-tools: Edit
---

Integrate rate limiting into SvelteKit routes or ORPC handlers.

Update:
- Hook into `rate-limit.ts` instance
- Add rate limiter check before processing
- Throw appropriate errors for exceeded limits

Rate limiting conventions:
- Use 20 req/sec default based on rateLimiterMemory
- Differentiate by IP or session in production
- Handle rate-limit errors gracefully in UI
- Log or monitor excessive requests