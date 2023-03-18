<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import { enhance, type SubmitFunction } from '$app/forms';
	import { supabaseClient } from '$lib/supabase';
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import { Moon, Sun, LogOut } from 'lucide-svelte';

	let theme = localStorage.theme || 'dark';

	const submitLogout: SubmitFunction = async ({ cancel }) => {
		const { error } = await supabaseClient.auth.signOut();
		if (error) {
			console.log(error);
		}
		cancel();
		goto('/');
	};

	function toggleTheme() {
		theme = theme === 'light' ? 'dark' : 'light';
		localStorage.theme = theme;
		document.documentElement.classList.toggle('dark', theme === 'dark');
	}

	export let data: PageData;
</script>

<main class="mx-auto mt-10 max-w-4xl justify-self-center px-4 text-gray-1000 dark:text-gray-50">
	<h1 class="mb-4 text-left text-3xl font-bold">Profile</h1>
	{#if data.session}
		<h2 class="text-2xl font-semibold">
			Welcome back, <span class="text-svelte-orange"
				>{data.session.user.email.substring(0, data.session.user.email.indexOf('@'))}</span
			>!
		</h2>
		<form
			action="/logout"
			method="POST"
			use:enhance={submitLogout}
			class="mt-4 flex items-center justify-between space-x-4 border-b border-gray-300 py-3 dark:border-gray-700"
		>
			<span class="font-medium text-gray-1000 dark:text-gray-50">Account</span>

			<button
				type="submit"
				class="flex items-center space-x-2 font-medium text-gray-1000 dark:text-gray-50"
			>
				<span>Logout</span>
				<LogOut color="#FF3E00" />
			</button>
		</form>
	{/if}
	<div
		class="flex items-center justify-between space-x-4 border-b border-gray-300 py-3 dark:border-gray-700"
	>
		<span class="font-medium text-gray-1000 dark:text-gray-50">Theme</span>
		<button
			class="flex items-center space-x-2 font-medium text-gray-1000 dark:text-gray-50"
			on:click={toggleTheme}
		>
			{#if theme === 'light'}
				<span>Light</span>
				<Sun color="#FF3E00" />
			{:else}
				<span>Dark</span>
				<Moon color="#FF3E00" />
			{/if}
		</button>
	</div>
</main>

<Navbar current="profile" />
