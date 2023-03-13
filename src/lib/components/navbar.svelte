<script>
	import { goto } from '$app/navigation';
	import { Library, Home, User } from 'lucide-svelte';

	/**
	 * @type {string}
	 */
	export let current;

	const gotoCollection = () => {
		goto('/app/collection');
	};

	const gotoHome = () => {
		goto('/app');
	};

	const gotoProfile = () => {
		goto('/app/profile');
	};
</script>

<nav class="fixed bottom-0 w-screen bg-gray-200 bg-opacity-50 backdrop-blur-sm">
	<div class="mx-auto flex max-w-4xl justify-between">
		<button
			on:click={gotoCollection}
			class:text-svelte-orange={current === 'collection'}
			class="flex w-1/3 flex-col items-center justify-center p-1 text-gray-900"
		>
			<Library />
			<span class="mt-0.5 text-sm font-semibold">Collection</span>
		</button>
		<button
			on:click={gotoHome}
			class:text-svelte-orange={current === 'home'}
			class="flex w-1/3 flex-col items-center justify-center p-1 text-gray-900"
		>
			<Home />
			<span class="mt-0.5 text-sm font-semibold">Home</span>
		</button>
		<button
			on:click={gotoProfile}
			class:text-svelte-orange={current === 'profile'}
			class="flex w-1/3 flex-col items-center justify-center p-1 text-gray-900"
		>
			<User />
			<span class="mt-0.5 text-sm font-semibold">Profile</span>
		</button>
	</div>
</nav>
