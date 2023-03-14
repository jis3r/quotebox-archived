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

<nav class="fixed top-0 h-20 w-screen bg-gray-200 bg-opacity-50 backdrop-blur-sm">
	<div class="mx-auto flex max-w-xl justify-between">test</div>
</nav>

<main class="mx-auto mt-20 max-w-4xl pt-36">
	<div class="mx-auto">
		<h1 class="text-5xl font-bold md:text-7xl">
			Never forget meaningful moments and save the best quotes from your
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
		<button
			on:click={gotoApp}
			class=" rounded-full border border-gray-900 bg-gray-900 py-2 px-4 font-bold text-gray-100"
		>
			To the app</button
		>
	</div>
</main>
