<script>
	import AddQuoteModal from '$lib/components/addQuoteModal.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import { QuotesStore } from '../stores.js';
	import formatDate from '$lib/utils/formatDate.js';
	import { Plus, Shuffle } from 'lucide-svelte';

	let addQuote = false;
	/**
	 * @type {{ id: number; quote: string; author: string; timeCreated: number; }[]}
	 */
	let quotes = [];
	let randomQuote = {};

	QuotesStore.subscribe((value) => {
		quotes = value;
		quotes.sort((a, b) => b.timeCreated - a.timeCreated);
	});

	/**
	 * @param {{ detail: any; }} event
	 */
	function handleAddQuote(event) {
		console.log(event.detail);
		const newQuote = event.detail;

		QuotesStore.update((quotes) => [...quotes, newQuote]);
		addQuote = false;
	}

	function handleCancel() {
		addQuote = false;
	}

	function getRandomQuote() {
		randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
	}
</script>

<main class="mx-auto max-w-4xl px-4 pt-10 text-gray-900">
	{#if addQuote}
		<AddQuoteModal on:addQuote={handleAddQuote} on:cancel={handleCancel} />
	{:else}
		<h1 class="mb-4 text-left text-3xl font-bold">Home</h1>
		<div class="my-4 overflow-hidden rounded-lg bg-gray-50 p-4 shadow-md">
			{#if randomQuote.quote}
				<h3 class="w-full">{randomQuote.quote}</h3>
				<p class="text-gray-500">{randomQuote.author}</p>
			{:else}
				<h3 class="w-full">Get a random Quote!</h3>
			{/if}
			<button
				on:click={getRandomQuote}
				class="float-right mt-4 rounded-full border border-gray-900 p-2 font-bold"
			>
				<Shuffle />
			</button>
			<div class="clearfix" />
		</div>
		<div />
		<h2 class="my-4 text-left text-2xl font-semibold">Recently added</h2>
		{#each quotes.slice(0, 3) as quote, i}
			<div
				class="my-4 overflow-hidden rounded-lg bg-gray-50 p-4 shadow-md {i === 2 ? 'mb-24' : ''}"
			>
				<p class="float-right text-gray-500">{formatDate(quote.timeCreated)}</p>
				<h3 class="float-left w-full">{quote.quote}</h3>
				<p class="float-right w-full text-right text-gray-500">{quote.author}</p>
				<div class="clearfix" />
			</div>
		{/each}

		<button
			on:click={() => (addQuote = !addQuote)}
			class="fixed bottom-16 rounded-full border border-gray-900 bg-gray-900 p-2 font-bold text-gray-100"
		>
			<Plus />
		</button>
	{/if}
</main>

{#if !addQuote}
	<Navbar current="home" />
{/if}
