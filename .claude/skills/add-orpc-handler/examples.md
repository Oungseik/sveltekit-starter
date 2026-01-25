// Example: health_check.ts
export async function healthCheck(ctx: Context): Promise<{ status: string }> {
    // No auth required for health checks
    return { status: "ok" };
}

// Example router.ts update:
// import { healthCheck } from './handlers/health/health_check.js';
//
// export const router = os.router({
//   health: {
//     check: os.handler(healthCheck),
//   },
// });