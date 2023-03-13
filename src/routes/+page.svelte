<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	function gotoApp() {
		goto('/app');
	}

	/**
	 * @type {string[]}
	 */
	const examples = ['friends', 'children', 'siblings', 'partner', 'parents'];

	//function, that rotates the text in the #changing span at a set interval
	function rotateText() {
		let i = 0;
		setInterval(function () {
			document.getElementById('changing').textContent = examples[i];
			i = (i + 1) % examples.length;
		}, 2000);
	}

	onMount(rotateText);
</script>

<nav class="fixed top-0 h-20 w-screen bg-gray-200 bg-opacity-50 backdrop-blur-sm">
	<div class="mx-auto flex max-w-xl justify-between">test</div>
</nav>

<main class="mx-auto mt-20 max-w-4xl pt-36">
	<div class="mx-auto">
		<h1 class="text-5xl font-bold md:text-7xl">
			<span>Never forget a meaningful moment and save the best quotes from your</span>
			<span id="changing" class=" text-svelte-orange">friends</span>
			<span>.</span>
		</h1>
		<button
			on:click={gotoApp}
			class=" rounded-full border border-gray-900 bg-gray-900 py-2 px-4 font-bold text-gray-100"
		>
			To the app</button
		>
	</div>
</main>
