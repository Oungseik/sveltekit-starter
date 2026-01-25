// Button.svelte example
<script>
    import { cva } from 'tailwind-variants';
    
    let { class: className, variant = 'default', ...props } = $props();
    
    const buttonVariants = cva(
        'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
        {
            variants: {
                variant: {
                    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
                    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                },
            },
            defaultVariants: {
                variant: 'default',
            },
        }
    );
</script>

<button class={buttonVariants({ variant, class: className })} {...props}>
    {@render children?.()}
</button>