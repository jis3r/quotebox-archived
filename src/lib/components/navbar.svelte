<script>
	import { goto } from '$app/navigation';
	import { Library, PlusSquare, User } from 'lucide-svelte';

	const gotoCollection = () => {
		goto('/collection');
	};

	const gotoAdd = () => {
		goto('/');
	};

	const gotoProfile = () => {
		goto('/profile');
	};
</script>

<nav
	class="flex justify-between w-screen fixed bottom-0 backdrop-blur-sm bg-gray-200 bg-opacity-50"
>
	<button on:click={gotoCollection} class="w-1/3 p-1 flex flex-col justify-center items-center">
		<Library />
		<span class="mt-0.5 text-sm font-semibold">Collection</span>
	</button>
	<button on:click={gotoAdd} class="w-1/3 p-1 flex flex-col justify-center items-center">
		<PlusSquare />
		<span class="mt-0.5 text-sm font-semibold">Add</span>
	</button>
	<button on:click={gotoProfile} class="w-1/3 p-1 flex flex-col justify-center items-center">
		<User />
		<span class="mt-0.5 text-sm font-semibold">Profile</span>
	</button>
</nav>
