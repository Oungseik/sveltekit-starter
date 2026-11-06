import { browser } from "$app/env";
import { RPCJsonSerializer } from "@orpc/client";
import { QueryClient, hydrate } from "@tanstack/svelte-query";

import type { LayoutLoad } from "./$types";

const serializer = new RPCJsonSerializer();

export const load: LayoutLoad = async () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        enabled: browser,
      },
      dehydrate: {
        serializeData(data) {
          return serializer.serializeJson(data);
        },
      },
      hydrate: {
        deserializeData(data) {
          return serializer.deserializeJson(data);
        },
      },
    },
  });

  if (browser) {
    hydrate(queryClient, window.dehydrated);
  }

  return { queryClient };
};
