<script>
	import Navbar from '../lib/components/navbar.svelte';
</script>

<main class=" h-screen mt-10 max-w-4xl justify-self-center mx-auto px-4">
	<h1 class="text-left text-3xl font-bold mb-4">Home</h1>
	<div class="rounded-lg p-4 shadow-md overflow-hidden my-4">
		<h3 class="w-full">Get a random Quote!</h3>
		<button class="px-4 py-2 border-gray-900 border font-bold rounded-full mt-4 float-right">
			Shuffle!
		</button>
		<div class="clearfix" />
	</div>
	<div />
	<h2 class="text-left text-xl font-semibold my-4">Recently added</h2>
	<div class="rounded-lg p-4 shadow-md my-4">Recently Added</div>

	<button class="block border-gray-900 border font-bold py-2 px-4 rounded-full w-full">
		Add Quote
	</button>
</main>

<Navbar current="home" />
