import { createRouterClient } from "@orpc/server";

import { os } from "./base";
import { healthCheckHandler } from "./handlers/health/health_check";

export const router = os.router({
  health: { check: healthCheckHandler },
});

/** only for server-side call */
export const client = createRouterClient(router);

export type Router = typeof router;
