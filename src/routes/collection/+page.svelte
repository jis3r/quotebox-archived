<script>
	import Navbar from '../../lib/components/navbar.svelte';
	import { Search } from 'lucide-svelte';
	let change_count = 0;
	let input_count = 0;
</script>

<main class="mt-10 max-w-4xl justify-self-center mx-auto px-4">
	<h1 class="text-left text-3xl font-bold mb-4">Collection</h1>
	<div class="relative">
		<input
			type="text"
			class="bg-gray-200 bg-opacity-50 rounded-full py-2 pl-9 pr-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
			placeholder="Search"
			on:change={() => (change_count += 1)}
			on:input={() => (input_count += 1)}
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
</main>

<Navbar current="collection" />
