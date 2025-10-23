<script lang="ts">
  import "@fontsource/inter";
  import { Toaster } from "@repo/ui/sonner";
  import { setupConvex } from "convex-svelte";
  import { ModeWatcher } from "mode-watcher";

  import { PUBLIC_CONVEX_URL } from "$env/static/public";

  import "../app.css";
  import type { LayoutProps } from "./$types";

  setupConvex(PUBLIC_CONVEX_URL);
  let { children }: LayoutProps = $props();
</script>

<ModeWatcher />
<Toaster />
{@render children()}
