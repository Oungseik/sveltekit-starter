import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import type { RouterClient } from "@orpc/server";
import {
  createTanstackQueryUtils,
  TANSTACK_QUERY_OPERATION_CONTEXT_SYMBOL,
} from "@orpc/tanstack-query";
import type { Router } from "$lib/server/orpc/router";

const GET_OPERATION_TYPE = new Set(["query", "streamed", "live", "infinite"]);

const link = new RPCLink({
  url: () => `${window.location.origin}/rpc`,
  method: ({ context }) => {
    const operationType = context[TANSTACK_QUERY_OPERATION_CONTEXT_SYMBOL]?.type;

    if (operationType && GET_OPERATION_TYPE.has(operationType)) {
      return "GET";
    }

    return "POST";
  },
  plugins: [],
});

const client: RouterClient<Router> = globalThis.$client ?? createORPCClient(link);
export const orpc = createTanstackQueryUtils(client);
