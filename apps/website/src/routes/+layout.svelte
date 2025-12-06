<script lang="ts">
  import "@fontsource/inter";
  import { QueryClientProvider, dehydrate } from "@tanstack/svelte-query";
  import { ModeWatcher } from "mode-watcher";

  import { browser } from "$app/environment";
  import { createDehydratedScript } from "$lib/utils";

  import "../app.css";
  import type { LayoutProps } from "./$types";

  let { children, data }: LayoutProps = $props();
</script>

<svelte:head>
  {#if !browser}
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html createDehydratedScript(dehydrate(data.queryClient))}
  {/if}
</svelte:head>

<QueryClientProvider client={data.queryClient}>
  <ModeWatcher />
  {@render children()}
</QueryClientProvider>
