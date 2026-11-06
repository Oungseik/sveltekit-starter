import { env } from "$env/dynamic/public";
import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import { BatchLinkPlugin } from "@orpc/client/plugins";
import type { RouterClient } from "@orpc/server";
import { createTanstackQueryUtils } from "@orpc/tanstack-query";

import type { Router } from "#lib/server/orpc/router";

const link = new RPCLink({
  url: "/rpc",
  plugins: [
    new BatchLinkPlugin({
      groups: [{ condition: () => env.PUBLIC_ENVIRONMENT !== "development", context: {} }],
    }),
  ],
});

const client: RouterClient<Router> = globalThis.$client ?? createORPCClient(link);
export const orpc = createTanstackQueryUtils(client);
