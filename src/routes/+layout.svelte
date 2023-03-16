<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { invalidateAll } from '$app/navigation';
	import { supabaseClient } from '$lib/supabase';

	onMount(() => {
		const {
			data: { subscription }
		} = supabaseClient.auth.onAuthStateChange(() => {
			invalidateAll();
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<slot />
