<script lang="ts">
  import "@fontsource/inter";
  import { Toaster } from "@repo/ui/sonner";
  import { ModeWatcher } from "mode-watcher";

  import "../app.css";
  import type { LayoutProps } from "./$types";

  let { children }: LayoutProps = $props();
</script>

<ModeWatcher />
<Toaster />
{@render children()}
