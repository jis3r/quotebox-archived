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
	<button class="block w-full px-4 py-2 text-left text-sm" on:click={deleteHandler}>
		<span class="float-left mr-2">Delete </span>
		<Trash size="16" class="float-left" />
	</button>
	<button class="block w-full px-4 py-2 text-left text-sm" on:click={editHandler}>
		<span class="float-left mr-2">Edit </span>
		<Pen size="16" class="float-left" />
	</button>
</div>
