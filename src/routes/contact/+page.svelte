<script>
	import Icon from '$lib/components/icon.svelte';
	import profile from '$lib/profile';
	import { mdiCellphone, mdiEmail, mdiMapMarker } from '@mdi/js';
</script>

<div class="container mx-auto p-8 pl-28">
	<div
		class="border-b border-gray-300 after:-mb-px after:block after:w-1/4 after:border-b after:border-primary-500 after:content-['']"
	>
		<h2 class="font-serif text-3xl font-bold">Contact me</h2>
		<p class="mb-3 opacity-60">Get In Touch With Me</p>
	</div>

	<div class="my-8 grid grid-cols-2 items-center gap-16">
		<div>
			<form action="" method="post" class="space-y-6" novalidate>
				<div>
					<label for="name">Your Name</label>
					<input type="text" id="name" placeholder="" required />
				</div>
				<div>
					<label for="email">Your Email</label>
					<input type="email" id="email" placeholder="name@flowbite.com" required />
				</div>
				<div>
					<label for="message">Your Message</label>
					<textarea id="message" rows="5" required />
				</div>
				<div>
					<button type="submit">Submit</button>
				</div>
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
					<Icon path={mdiMapMarker} size={2} class="text-primary-500" />
					<div>
						<h6 class="font-serif text-xl">Location</h6>
						<p>{profile.location}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	label {
		@apply mb-2 block text-sm font-medium;
	}

	input,
	textarea {
		@apply block w-full rounded border border-gray-300 bg-gray-50 p-3 focus:border-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:border-primary-500;
	}

	button {
		@apply w-full rounded bg-primary-700 px-5 py-3 text-center font-medium text-white hover:bg-primary-800 focus:outline-none sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700;
	}
</style>
