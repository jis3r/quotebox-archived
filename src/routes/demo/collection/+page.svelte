<script>
	import Navbar from '$lib/components/navbar.svelte';
	import { Search } from 'lucide-svelte';
	import { QuotesStore } from '../../../stores/quoteStore.js';
	import formatDate from '$lib/utils/formatDate.js';

	let quotes = [];
	let filteredQuotes = [];

	let searchTerm = '';
	let authorName = '';

	function filterQuotes() {
		filteredQuotes = quotes.filter((quote) => {
			const includesSearchTerm = quote.text.toLowerCase().includes(searchTerm.toLowerCase());
			const includesAuthorName =
				authorName === '' || quote.author.toLowerCase() === authorName.toLowerCase();
			return includesSearchTerm && includesAuthorName;
		});
	}

	QuotesStore.subscribe((value) => {
		quotes = value;
		quotes.sort((a, b) => b.created_at - a.created_at);
		filterQuotes();
	});

	let change_count = 0;
	let input_count = 0;
</script>

<main class="mx-auto mt-10 max-w-4xl justify-self-center px-4 text-gray-1000 dark:text-gray-50">
	<h1 class="mb-4 text-left text-3xl font-bold">Collection</h1>
	<div class="relative">
		<input
			type="text"
			class="focus:shadow-outline w-full rounded-full bg-white py-2 pl-9 pr-4 leading-tight text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-100"
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
			class="absolute top-1/2 left-4 flex -translate-y-1/2 transform items-center justify-center"
		>
			<Search size="16" color="#9ca3af" />
		</div>
	</div>
	<div class="relative mt-4">
		<select
			class="focus:shadow-outline rounded-full bg-white px-4 py-2 leading-tight text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-100"
			on:change={(event) => {
				change_count += 1;
				authorName = event.target.value;
				filterQuotes();
			}}
			bind:value={authorName}
		>
			<option value="">All Authors</option>
			{#each Array.from(new Set(quotes.map((quote) => quote.author))) as author}
				<option value={author}>{author}</option>
			{/each}
		</select>
	</div>
	<div class="mt-4">
		<p class="text-gray-500">Change count: {change_count}</p>
		<p class="text-gray-500">Input count: {input_count}</p>
	</div>

	<!-- a svelte loop that displays the array of filteredQuotes from new to old-->
	{#each filteredQuotes as quote, i}
		<div
			class="my-4 overflow-hidden rounded-lg bg-gray-50 p-4 shadow-md dark:bg-gray-800 {i ===
			filteredQuotes.length - 1
				? 'mb-16'
				: ''}"
		>
			<p class="float-right w-full text-right text-gray-500">{formatDate(quote.created_at)}</p>
			<h3 class="float-left w-full text-left">{quote.text}</h3>
			<p
				class="float-right cursor-pointer text-right text-gray-500 hover:underline"
				on:click={function () {
					authorName = quote.author;
					filterQuotes();
				}}
			>
				{quote.author}
			</p>
			<div class="clearfix" />
		</div>
	{/each}
</main>
<Navbar current="collection" />
