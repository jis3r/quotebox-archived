<script>
	import { fly } from 'svelte/transition';
</script>

<main class="flex min-h-screen items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
	<div
		class="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-md"
		in:fly={{ y: 100, duration: 500 }}
	>
		<h1 class="mb-6 text-center text-3xl font-bold text-gray-900">Register</h1>
		<form action="?/register" method="POST" class="auth-form">
			<div class="-space-y-px rounded-md shadow-sm">
				<label for="email" class="sr-only">Email</label>
				<input
					id="email"
					type="email"
					name="email"
					required
					class="relative block w-full appearance-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-svelte-orange focus:outline-none focus:ring-svelte-orange sm:text-sm"
					placeholder="Email"
				/>

				<label for="password" class="sr-only">Password</label>
				<input
					id="password"
					type="password"
					name="password"
					required
					class="relative block w-full appearance-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-svelte-orange focus:outline-none focus:ring-svelte-orange sm:text-sm"
					placeholder="Password"
				/>
			</div>

			<button
				type="submit"
				class="btn btn-primary mt-6 w-full rounded-full border border-transparent bg-gray-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-svelte-orange focus:ring-offset-2"
				>Register</button
			>
			<div class="mt-4 text-center">
				<p class="text-sm text-gray-900">
					Already have an account? <a href="/login" class="text-svelte-orange hover:underline"
						>Login here</a
					>
				</p>
			</div>
		</form>
	</div>
</main>
