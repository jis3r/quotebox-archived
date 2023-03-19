<script lang="ts">
	import AddQuoteModal from '$lib/components/addQuoteModal.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import { loadQuotes, QuotesStore } from '../../stores/quoteStore.js';
	import formatDate from '$lib/utils/formatDate.js';
	import { Plus } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { supabaseClient } from '$lib/supabase';
	import { goto } from '$app/navigation';

	let addQuote = false;
	/**
	 * @type {{ id: number; quote: string; author: string; created_at: number; }[]}
	 */
	let quotes: {}[] = [];
	let randomQuote = {};
	let quoteOfTheDay = {};

	QuotesStore.subscribe((value) => {
		quotes = value;
		quotes.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
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
		randomQuote = quotes[Math.floor(Math.random() * quotes.length)] || {};
	}

	function getQuoteOfTheDay() {
		const quoteOfTheDayString = localStorage.getItem('quoteOfTheDay');
		const quoteOfTheDayDate = localStorage.getItem('quoteOfTheDayDate');

		if (
			!quoteOfTheDayString ||
			!quoteOfTheDayDate ||
			quoteOfTheDayDate !== new Date().toDateString()
		) {
			quoteOfTheDay = quotes[Math.floor(Math.random() * quotes.length)];
			localStorage.setItem('quoteOfTheDay', JSON.stringify(quoteOfTheDay));
			localStorage.setItem('quoteOfTheDayDate', new Date().toDateString());
		} else {
			quoteOfTheDay = JSON.parse(quoteOfTheDayString);
		}
	}

	onMount(async () => {
		const user = await supabaseClient.auth.getSession();
		if (!user.data.session) {
			goto('/login');
		} else {
			loadQuotes();
			//getQuoteOfTheDay();
		}
	});
</script>

<main class="mx-auto max-w-4xl px-4 pt-10 text-gray-1000 dark:text-gray-50">
	{#if addQuote}
		<AddQuoteModal on:addQuote={handleAddQuote} on:cancel={handleCancel} />
	{:else}
		<h1 class="mb-4 text-left text-3xl font-bold">Home</h1>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			<div>
				<h2 class="mb-4 text-left text-2xl font-semibold">Quote of the day</h2>
				<div class="my-4 overflow-hidden rounded-lg bg-gray-50 p-4 shadow-md dark:bg-gray-800">
					{#if quoteOfTheDay.text}
						<h3 class="w-full">{quoteOfTheDay.text}</h3>
						<p class="w-full text-right text-gray-500">{quoteOfTheDay.author}</p>
					{:else}
						<h3 class="w-full italic text-gray-500">No Quote of the day available. :(</h3>
					{/if}
				</div>
			</div>
			<div>
				<h2 class="mb-4 text-left text-2xl font-semibold">Random quotes</h2>
				<div
					class="my-4 cursor-pointer overflow-hidden rounded-lg bg-gray-50 p-4 shadow-md dark:bg-gray-800"
					on:click={getRandomQuote}
				>
					{#if randomQuote.text}
						<h3 class="w-full">{randomQuote.text}</h3>
						<p class="w-full text-right text-gray-500">{randomQuote.author}</p>
					{:else}
						<h3 class="w-full italic text-gray-500">Click on this card to get a random Quote!</h3>
					{/if}
				</div>
			</div>
		</div>

		<h2 class="my-4 text-left text-2xl font-semibold">Recently added</h2>
		{#if quotes.length === 0}
			<h3 class="w-full italic text-gray-500">
				Nothing here yet. Change this by tapping the plus-button in the bottom-right corner!
			</h3>
		{:else}
			{#each quotes.slice(0, 3) as quote, i}
				<div
					class="my-4 overflow-hidden rounded-lg bg-gray-50 p-4 shadow-md dark:bg-gray-800 {i === 2
						? 'mb-24'
						: ''}"
				>
					<p class="float-right text-gray-500">{formatDate(quote.created_at)}</p>
					<h3 class="float-left w-full">{quote.text}</h3>
					<p class="float-right w-full text-right text-gray-500">{quote.author}</p>
					<div class="clearfix" />
				</div>
			{/each}
		{/if}

		<button
			on:click={() => (addQuote = !addQuote)}
			class="fixed right-4 bottom-16 rounded-full border border-gray-1000 bg-gray-1000 p-2 font-bold text-gray-100 dark:bg-gray-100 dark:text-gray-1000"
		>
			<Plus />
		</button>
	{/if}
</main>

{#if !addQuote}
	<Navbar current="home" />
{/if}
