<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import { enhance, type SubmitFunction } from '$app/forms';
	import { supabaseClient } from '$lib/supabase';
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';

	const submitLogout: SubmitFunction = async ({ cancel }) => {
		const { error } = await supabaseClient.auth.signOut();
		if (error) {
			console.log(error);
		}
		cancel();
		goto('/');
	};

	export let data: PageData;
</script>

<main class="mx-auto mt-10 max-w-4xl justify-self-center px-4 text-gray-900">
	<h1 class="mb-4 text-left text-3xl font-bold">Profile</h1>
	{#if data.session}
		<h1 class="text-4xl font-bold md:text-7xl">
			Welcome back, <span class="text-svelte-orange">{data.session.user.email}</span>!
		</h1>
		<form action="/logout" method="POST" use:enhance={submitLogout}>
			<button
				type="submit"
				class="btn btn-primary mt-6 w-full rounded-full border border-transparent bg-gray-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-svelte-orange focus:ring-offset-2"
				>Logout</button
			>
		</form>
	{/if}
</main>

<Navbar current="profile" />
