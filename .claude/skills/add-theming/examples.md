// Example themed button
<script>
    let { variant = 'default' } = $props();
</script>

<button 
    class="px-4 py-2 rounded bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary-50)] dark:bg-[var(--primary-dark)]"
    class:secondary={variant === 'secondary'}
>
    {@render children?.()}
</button>

<style>
    .secondary {
        background-color: var(--secondary);
    }
</style>