<script>
	import Navbar from '$lib/components/navbar.svelte';
	import { Search } from 'lucide-svelte';
	import { QuotesStore } from '../../stores.js';
	import formatDate from '$lib/utils/formatDate.js';

	let quotes = [];
	let filteredQuotes = [];

	let searchTerm = '';

	function filterQuotes() {
		filteredQuotes = quotes.filter((quote) => {
			return quote.quote.toLowerCase().includes(searchTerm.toLowerCase());
		});
	}

	QuotesStore.subscribe((value) => {
		quotes = value;
		filterQuotes();
	});

	let change_count = 0;
	let input_count = 0;
</script>

<main class="mt-10 max-w-4xl justify-self-center mx-auto px-4 text-gray-900">
	<h1 class="text-left text-3xl font-bold mb-4">Collection</h1>
	<div class="relative">
		<input
			type="text"
			class="bg-white rounded-full py-2 pl-9 pr-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
			placeholder="Search"
			on:change={() => (change_count += 1)}
			on:input={(event) => {
				input_count += 1;
				searchTerm = event.target.value;
				filterQuotes();
			}}
			bind:value={searchTerm}
		/>
		<div
			class="absolute top-1/2 left-4 transform -translate-y-1/2 flex items-center justify-center"
		>
			<Search size="16" color="#9ca3af" />
		</div>
	</div>
	<div class="mt-4">
		<p class="text-gray-500">Change count: {change_count}</p>
		<p class="text-gray-500">Input count: {input_count}</p>
	</div>

	<!-- a svelte loop that displays the array of filteredQuotes from new to old-->
	{#each filteredQuotes as quote, i}
		<div
			class="bg-gray-50 rounded-lg p-4 shadow-md overflow-hidden my-4 {i ===
			filteredQuotes.length - 1
				? 'mb-16'
				: ''}"
		>
			<h3 class="w-full">{quote.quote}</h3>
			<p class="text-gray-500">{quote.author}</p>
			<!--timestamp in the bottom right corner-->
			<p class="text-gray-500 float-right">{formatDate(quote.timeCreated)}</p>
			<div class="clearfix" />
		</div>
	{/each}
</main>

<Navbar current="collection" />
