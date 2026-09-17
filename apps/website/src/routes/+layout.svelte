<script lang="ts">
  import { QueryClientProvider, dehydrate } from "@tanstack/svelte-query";
  import { ModeWatcher } from "mode-watcher";

  import { browser } from "$app/env";
  import { createDehydratedScript } from "#lib/utils";

  import "../app.css";
  import type { LayoutProps } from "./$types";

  let { children, data }: LayoutProps = $props();
</script>

<svelte:head>
  {#if !browser}
    {@html createDehydratedScript(dehydrate(data.queryClient))}
  {/if}
</svelte:head>

<QueryClientProvider client={data.queryClient}>
  <ModeWatcher />
  {@render children()}
</QueryClientProvider>
