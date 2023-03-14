<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';

	let current = 0;

	onMount(rotateText);

	function rotateText() {
		setInterval(() => {
			current = (current + 1) % 5;
		}, 5000);
	}

	function gotoApp() {
		goto('/app');
	}
</script>

<nav class="fixed top-0 h-20 w-screen bg-opacity-50 backdrop-blur-sm">
	<div class="mx-auto flex h-full max-w-4xl flex-grow items-center justify-between px-4">
		<a href="/">QuoteBox</a>
	</div>
</nav>

<main class="mx-auto mt-20 grid max-w-4xl px-4 pt-8 md:pt-32">
	<h1 class="text-4xl font-bold md:text-7xl">
		Never forget a meaningful moment and save the best quotes from your
		{#if current === 0}
			<span class="text-svelte-orange" in:blur={{ duration: 250 }}>friends</span>.
		{:else if current === 1}
			<span class="text-svelte-orange" in:blur={{ duration: 250 }}>children</span>.
		{:else if current === 2}
			<span class="text-svelte-orange" in:blur={{ duration: 250 }}>siblings</span>.
		{:else if current === 3}
			<span class="text-svelte-orange" in:blur={{ duration: 250 }}>partner</span>.
		{:else if current === 4}
			<span class="text-svelte-orange" in:blur={{ duration: 250 }}>parents</span>.
		{/if}
	</h1>

	<div class="mt-8 flex gap-2 md:mt-16">
		<button
			on:click={gotoApp}
			class="rounded-full border border-gray-900 bg-gray-900 py-2 px-4 font-bold text-gray-100"
			>Create account</button
		>

		<button
			on:click={gotoApp}
			class="rounded-full border border-gray-900 py-2 px-4 font-bold text-gray-900">Demo</button
		>
	</div>
</main>
