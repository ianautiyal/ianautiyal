<script lang="ts">
	import { enhance } from '$app/forms';
	import Icon from '$lib/components/icon.svelte';
	import profile from '$lib/profile';
	import { mdiCellphone, mdiEmail, mdiMapMarker, mdiWeb } from '@mdi/js';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<div
	class="border-b border-gray-300 after:-mb-px after:block after:w-1/4 after:border-b after:border-primary-500 after:content-['']"
>
	<h2 class="font-serif text-3xl font-bold">Contact me</h2>
	<p class="mb-3 opacity-60">Get In Touch With Me</p>
</div>

<div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
	<div class="md:col-span-2">
		<div
			class="mb-6 border-b border-gray-300 after:-mb-px after:block after:w-1/6 after:border-b after:border-primary-500 after:content-['']"
		>
			<h2 class="mb-2 font-serif text-xl">Let's Connect:</h2>
		</div>
		<p>
			I'm always open to new opportunities, collaborations, and discussions about the exciting
			possibilities in the tech realm. Whether you're interested in my past projects, want to
			discuss potential collaborations, or simply share insights, feel free to reach out. Let's
			connect and explore the limitless possibilities of technology together.
		</p>
	</div>
	<div>
		<div
			class="mb-6 border-b border-gray-300 after:-mb-px after:block after:w-1/4 after:border-b after:border-primary-500 after:content-['']"
		>
			<h2 class="mb-2 font-serif text-xl">Leave a message</h2>
		</div>

		{#if form?.error}
			<div
				class="mb-4 rounded bg-red-50 p-4 text-sm text-red-800 dark:bg-gray-800 dark:text-red-400"
				role="alert"
			>
				<span class="font-medium">Oops!</span>
				{form.error}
			</div>
		{:else if form?.success}
			<div
				class="mb-4 rounded bg-green-50 p-4 text-sm text-green-800 dark:bg-gray-800 dark:text-green-400"
				role="alert"
			>
				<span class="font-medium">Success!</span>
				{form.success}
			</div>
		{/if}
		<form method="post" class="space-y-6" use:enhance novalidate>
			<div>
				<input type="text" name="name" placeholder="Enter your name" required />
				{#if form?.errors?.name}
					<p class="text-red-500">{form?.errors?.name[0]}</p>
				{/if}
			</div>
			<div>
				<input type="email" name="email" placeholder="Enter your email" required />
				{#if form?.errors?.email}
					<p class="text-red-500">{form?.errors?.email[0]}</p>
				{/if}
			</div>
			<div>
				<textarea name="message" placeholder="Enter your message" rows="5" required />
				{#if form?.errors?.message}
					<p class="text-red-500">{form?.errors?.message[0]}</p>
				{/if}
			</div>
			<button type="submit">Submit</button>
		</form>
	</div>
	<div class="space-y-12">
		<div
			class="mb-6 border-b border-gray-300 after:-mb-px after:block after:w-1/4 after:border-b after:border-primary-500 after:content-['']"
		>
			<h2 class="mb-2 font-serif text-xl">Get In Touch</h2>
		</div>
		<div class="space-y-8">
			<div class="flex gap-6">
				<Icon path={mdiCellphone} size={2} class="text-primary-500" />
				<div>
					<h6 class="font-serif text-xl">Phone</h6>
					<p>{profile.phone}</p>
				</div>
			</div>
			<div class="flex gap-6">
				<Icon path={mdiEmail} size={2} class="text-primary-500" />
				<div>
					<h6 class="font-serif text-xl">Email</h6>
					<p>{profile.email}</p>
				</div>
			</div>
			<div class="flex gap-6">
				<Icon path={mdiWeb} size={2} class="text-primary-500" />
				<div>
					<h6 class="font-serif text-xl">Website</h6>
					<p>{profile.website}</p>
				</div>
			</div>
			<div class="flex gap-6">
				<Icon path={mdiMapMarker} size={2} class="text-primary-500" />
				<div>
					<h6 class="font-serif text-xl">Location</h6>
					<p>{profile.location}</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	input,
	textarea {
		@apply block w-full rounded border border-gray-300 bg-gray-50 p-3 focus:border-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:border-primary-500;
	}

	button {
		@apply w-full rounded bg-primary-700 px-5 py-3 text-center font-medium text-white hover:bg-primary-800 focus:outline-none sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700;
	}
</style>
