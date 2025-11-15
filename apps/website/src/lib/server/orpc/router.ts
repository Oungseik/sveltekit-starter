import { createRouterClient } from "@orpc/server";

import { os } from "./base";

export const router = os.router({});

/** only for server-side call */
export const client = createRouterClient(router);

export type Router = typeof router;
