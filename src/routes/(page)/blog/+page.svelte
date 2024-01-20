<script lang="ts">
	import profile from '$lib/profile';
	import seo from '$lib/seo';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{seo.blog.title} | {profile.name}</title>
	<meta name="description" content={seo.blog.description} />
</svelte:head>

<div
	class="border-b border-gray-300 after:-mb-px after:block after:w-1/4 after:border-b after:border-primary-500 after:content-['']"
>
	<h2 class="font-serif text-3xl font-bold">Blogs</h2>
	<p class="mb-3 opacity-60">A collection of my thoughts</p>
</div>
<div class="grid grid-cols-1 gap-4 pt-8 md:grid-cols-2 lg:grid-cols-3">
	{#await data.posts}
		{#each [0, 1, 2, 3, 4, 5] as _}
			<div
				role="status"
				class="animate-pulse rounded border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
			>
				<div class="flex h-48 items-center justify-center bg-gray-300 dark:bg-gray-700">
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
				<div class="p-5">
					<div class="mb-4 h-3.5 w-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
					<div class="mb-4 h-3.5 w-1/2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
					<div class="mb-3 h-2.5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
					<div class="mb-3 h-2.5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
					<div class="mb-3 h-2.5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
					<div class="h-2.5 w-3/4 rounded-full bg-gray-200 dark:bg-gray-700"></div>
				</div>
			</div>
		{/each}
	{:then { items }}
		{#each items as post}
			{@const url = `/blog/${post.slug}`}
			<div
				class="rounded border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
			>
				<a href={url}>
					<img class="rounded-t" src={post.thumbnail} alt={post.title} />
				</a>
				<div class="p-5">
					<a href={url}>
						<h5 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
							{post.title}
						</h5>
					</a>
					<p class="mb-3 text-gray-700 dark:text-gray-400">{post.overview.substring(0, 150)}...</p>
					<a
						href={url}
						class="inline-flex items-center rounded bg-primary-700 px-3 py-2 text-center text-sm text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
					>
						Read more
					</a>
				</div>
			</div>
		{/each}
	{:catch error}
		<p class="text-red-500">{error.message}</p>
	{/await}
</div>
