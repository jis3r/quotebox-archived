<script>
	import { goto } from '$app/navigation';
	import { Library, Home, User } from 'lucide-svelte';

	/**
	 * @type {string}
	 */
	export let current;

	const gotoCollection = () => {
		goto('/collection');
	};

	const gotoHome = () => {
		goto('/');
	};

	const gotoProfile = () => {
		goto('/profile');
	};
</script>

<nav
	class="flex justify-between w-screen fixed bottom-0 backdrop-blur-sm bg-gray-200 bg-opacity-50"
>
	<button
		on:click={gotoCollection}
		class:text-svelte-orange={current === 'collection'}
		class="w-1/3 p-1 flex flex-col justify-center items-center text-gray-900"
	>
		<Library />
		<span class="mt-0.5 text-sm font-semibold">Collection</span>
	</button>
	<button
		on:click={gotoHome}
		class:text-svelte-orange={current === 'home'}
		class="w-1/3 p-1 flex flex-col justify-center items-center text-gray-900"
	>
		<Home />
		<span class="mt-0.5 text-sm font-semibold">Home</span>
	</button>
	<button
		on:click={gotoProfile}
		class:text-svelte-orange={current === 'profile'}
		class="w-1/3 p-1 flex flex-col justify-center items-center text-gray-900"
	>
		<User />
		<span class="mt-0.5 text-sm font-semibold">Profile</span>
	</button>
</nav>
