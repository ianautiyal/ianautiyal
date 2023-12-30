<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#await data.post}
	<div role="status" class="animate-pulse">
		<div
			class="mb-8 border-b border-gray-300 after:-mb-px after:block after:w-1/4 after:border-b after:border-primary-500 after:content-['']"
		>
			<div class="mb-4 h-5 w-3/4 rounded-full bg-gray-200 dark:bg-gray-700"></div>
			<div class="mb-2.5 h-2.5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
		</div>
		<div class="mb-4 flex h-96 items-center justify-center rounded bg-gray-300 dark:bg-gray-700">
			<svg
				class="h-10 w-10 text-gray-200 dark:text-gray-600"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				viewBox="0 0 16 20"
			>
				<path
					d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"
				/>
				<path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
			</svg>
		</div>
		{#each [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as _}
			<div class="mb-8">
				<div class="mb-4 h-5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
				<div class="mb-2.5 h-2.5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
				<div class="mb-2.5 h-2.5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
				<div class="h-2.5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
			</div>
		{/each}
		<span class="sr-only">Loading...</span>
	</div>
{:then post}
	<div
		class="mb-8 border-b border-gray-300 after:-mb-px after:block after:w-1/4 after:border-b after:border-primary-500 after:content-['']"
	>
		<h2 class="font-serif text-3xl font-bold">{post.title}</h2>
		<div class="my-2 flex justify-between">
			<p class="opacity-60">{post.slug}</p>
			<p class="opacity-60">{post.created}</p>
		</div>
	</div>
	<img src={post.thumbnail} alt={post.title} class="w-full" />
	<div class="blog-content pt-8">
		{@html post.content}
	</div>
{:catch error}
	<p class="text-red-500">{error.message}</p>
{/await}

<style lang="scss">
	.blog-content :global(p) {
		@apply mb-4;
	}
	.blog-content :global(h1) {
		@apply mb-1 font-serif text-3xl font-bold;
	}
	.blog-content :global(h2) {
		@apply mb-1 font-serif text-2xl font-bold;
	}
	.blog-content :global(h3) {
		@apply mb-1 font-serif text-xl font-bold;
	}
	.blog-content :global(h4) {
		@apply mb-1 font-serif text-lg font-bold;
	}
	.blog-content :global(h5) {
		@apply mb-1 font-serif text-base font-bold;
	}
	.blog-content :global(h6) {
		@apply mb-1 font-serif text-sm font-bold;
	}
</style>
