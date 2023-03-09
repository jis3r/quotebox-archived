<script>
	import AddQuoteModal from '$lib/components/addQuoteModal.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import { QuotesStore } from '../stores.js';
	import formatDate from '$lib/utils/formatDate.js';

	let addQuote = false;
	/**
	 * @type {{ id: number; quote: string; author: string; timeCreated: number; }[]}
	 */
	let quotes = [];

	QuotesStore.subscribe((value) => {
		quotes = value;
		quotes.sort((a, b) => b.timeCreated - a.timeCreated);
	});
</script>

<main class="mx-auto max-w-4xl px-4 pt-10 text-gray-900">
	<h1 class="mb-4 text-left text-3xl font-bold">Home</h1>
	<div class="my-4 overflow-hidden rounded-lg bg-gray-50 p-4 shadow-md">
		<h3 class="w-full">Get a random Quote!</h3>
		<button class="float-right mt-4 rounded-full border border-gray-900 px-4 py-2 font-bold">
			Shuffle!
		</button>
		<div class="clearfix" />
	</div>
	<div />
	<h2 class="my-4 text-left text-xl font-semibold">Recently added</h2>
	{#each quotes.slice(0, 3) as quote, i}
		<div class="my-4 overflow-hidden rounded-lg bg-gray-50 p-4 shadow-md {i === 2 ? 'mb-24' : ''}">
			<h3 class="w-full">{quote.quote}</h3>
			<p class="text-gray-500">{quote.author}</p>
			<p class="float-right text-gray-500">{formatDate(quote.timeCreated)}</p>
			<div class="clearfix" />
		</div>
	{/each}

	{#if addQuote}
		<AddQuoteModal />
	{/if}
	<button
		on:click={() => (addQuote = !addQuote)}
		class="fixed bottom-16 left-1/2 w-1/2 -translate-x-1/2 transform rounded-full border border-gray-900 bg-gray-900 py-2 font-bold text-gray-100"
	>
		Add Quote
	</button>
</main>

<Navbar current="home" />
