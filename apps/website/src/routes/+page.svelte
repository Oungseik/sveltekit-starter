<script lang="ts">
  import { api } from "@repo/convex/api";
  import { useQuery } from "convex-svelte";

  const query = useQuery(api.tasks.get, {});
</script>

{#if query.isLoading}
  Loading...
{:else if query.error}
  failed to load: {query.error.toString()}
{:else}
  <ul>
    {#each query.data as task}
      <li>
        {task.isCompleted ? "☑" : "☐"}
        <span>{task.text}</span>
        <span>assigned by {task.assigner}</span>
      </li>
    {/each}
  </ul>
{/if}
