// +page.server.ts
import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
    if (!locals.session) {
        throw redirect(302, '/login');
    }
    
    return {
        user: locals.session.user
    };
}

// +page.svelte
<script>
    let { data } = $props();
</script>

{#await data then { user }}
    <div class="container mx-auto">
        <!-- Authenticated content here -->
        <h1>Welcome, {user.name}!</h1>
    </div>
{/await}