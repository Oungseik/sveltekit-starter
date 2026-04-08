import { StandardRPCJsonSerializer } from "@orpc/client/standard";
import { QueryClient, hydrate } from "@tanstack/svelte-query";

import { browser } from "$app/environment";

import type { LayoutLoad } from "./$types";

const serializer = new StandardRPCJsonSerializer();

export const load: LayoutLoad = async () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        enabled: browser,
      },
      dehydrate: {
        serializeData(data) {
          const [json, meta] = serializer.serialize(data);
          return { json, meta };
        },
      },
      hydrate: {
        deserializeData(data) {
          return serializer.deserialize(data.json, data.meta);
        },
      },
    },
  });

  if (browser) {
    hydrate(queryClient, window.dehydrated);
  }

  return { queryClient };
};
