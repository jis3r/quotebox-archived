<script>
	import { Trash, Pen } from 'lucide-svelte';
	export let deleteHandler;
	export let editHandler;
	export let shareHandler;
	export let showMenu = false;
</script>

<div
	class={`${
		showMenu ? 'block' : 'hidden'
	} absolute right-full top-0 -mt-2 w-24 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800 dark:text-gray-100`}
>
	<button
		class="justify-left flex w-full items-center space-x-1 px-4 py-2 text-left text-sm"
		on:click={deleteHandler}
	>
		<Trash size="14" />
		<span>Delete</span>
	</button>

	<button
		class="justify-left flex w-full items-center space-x-1 px-4 py-2 text-left text-sm"
		on:click={editHandler}
	>
		<Pen size="14" />
		<span>Edit</span>
	</button>
</div>
