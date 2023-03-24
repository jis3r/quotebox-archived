<script>
	import Navbar from '$lib/components/navbar.svelte';
	import { Search } from 'lucide-svelte';
	import { QuotesStore, deleteQuote } from '../../../stores/quoteStore.js';
	import formatDate from '$lib/utils/formatDate.js';
	import { MoreVertical } from 'lucide-svelte';
	import OptionsMenu from '$lib/components/optionsMenu.svelte';

	let quotes = [];
	/**
	 * @type {string | any[]}
	 */
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
		quotes.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
		filterQuotes();
	});

	function toggleOptionsMenu(index) {
		filteredQuotes = filteredQuotes.map((quote, i) => {
			return { ...quote, showMenu: i === index ? !quote.showMenu : false };
		});
	}
</script>

<h1
	class="mx-auto max-w-4xl justify-self-center px-4 pt-10 text-left text-3xl font-bold text-gray-1000 dark:text-gray-50"
>
	Collection
</h1>
<div
	id="stickySearchAndFilter"
	class="sticky top-0 z-10 w-full border-b border-gray-300 bg-gray-100 bg-opacity-75 pt-4 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-1000 dark:bg-opacity-75"
>
	<div class="justify self center mx-auto max-w-4xl px-4">
		<div class="relative">
			<input
				type="text"
				class="focus:shadow-outline w-full rounded-full bg-white py-2 pl-9 pr-4 leading-tight text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-100"
				placeholder="Search"
				on:input={(event) => {
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
		<div class="relative my-4">
			<select
				class="focus:shadow-outline rounded-full bg-white px-4 py-2 leading-tight text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-100"
				on:change={(event) => {
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
	</div>
</div>
<main class="mx-auto mt-10 max-w-4xl justify-self-center px-4 text-gray-1000 dark:text-gray-50">
	<!-- a svelte loop that displays the array of filteredQuotes from new to old-->
	{#each filteredQuotes as quote, i}
		<div
			class="mx-1 my-4 overflow-hidden rounded-lg bg-gray-50 p-4 shadow-md dark:bg-gray-800 {i ===
			filteredQuotes.length - 1
				? 'mb-16'
				: ''}"
		>
			<button class="relative float-right" on:click={() => toggleOptionsMenu(i)}>
				<MoreVertical size="16" />
				<OptionsMenu
					bind:showMenu={quote.showMenu}
					deleteHandler={() => deleteQuote(quote.id)}
					editHandler={() => console.log('Edit', quote.id)}
					shareHandler={() => console.log('Share', quote.id)}
				/>
			</button>

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
