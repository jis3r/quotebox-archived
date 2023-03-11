<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let quote = '';
	let author = '';
	let date = new Date().toISOString().slice(0, 10);

	function handleSubmit(event) {
		event.preventDefault();
		const selectedDate = new Date(date);
		const currentDate = new Date();
		const newQuote = {
			quote,
			author,
			timeCreated: selectedDate.setHours(
				currentDate.getHours(),
				currentDate.getMinutes(),
				currentDate.getSeconds(),
				currentDate.getMilliseconds()
			)
		};
		dispatch('addQuote', newQuote);
		quote = '';
		author = '';
		date = new Date().toISOString().slice(0, 10);
	}

	function handleCancel() {
		dispatch('cancel');
	}
</script>

<div class="mx-auto max-w-md rounded-md bg-white p-6 shadow-md">
	<h2 class="mb-4 text-xl font-semibold">Add Quote</h2>
	<form on:submit={handleSubmit}>
		<div class="mb-4">
			<label for="quote" class="mb-2 block font-medium">Quote:</label>
			<textarea
				id="quote"
				class="w-full rounded-md border border-gray-300 p-2 focus:border-svelte-orange focus:outline-none"
				bind:value={quote}
				required
			/>
		</div>

		<div class="mb-4">
			<label for="author" class="mb-2 block font-medium">Author:</label>
			<input
				type="text"
				id="author"
				class="w-full rounded-md border border-gray-300 p-2 focus:border-svelte-orange focus:outline-none"
				bind:value={author}
				required
			/>
		</div>

		<div class="mb-4">
			<label for="date" class="mb-2 block font-medium">Date:</label>
			<input
				type="date"
				id="date"
				class="w-full rounded-md border border-gray-300 p-2 focus:border-svelte-orange focus:outline-none"
				bind:value={date}
			/>
		</div>

		<div class="flex justify-between">
			<button
				type="button"
				class="rounded-full border border-gray-900 py-2 px-4 font-medium text-gray-900"
				on:click={handleCancel}
			>
				Cancel
			</button>
			<button type="submit" class="rounded-full bg-gray-900 py-2 px-4 font-medium text-gray-100">
				Add Quote
			</button>
		</div>
	</form>
</div>
