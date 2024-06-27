<script lang="ts">
	import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
	import Icon from './icon.svelte';

	export let index = 0;
	export let items: string[] = [];

	function previous(event: Event) {
		event.preventDefault();
		index = (index - 1 + items.length) % items.length;
	}

	function next(event: Event) {
		event.preventDefault();
		index = (index + 1) % items.length;
	}
</script>

<div class="relative w-full">
	{#each items as item, i}
		<div class="duration-700 ease-in-out" class:hidden={i !== index}>
			<img src={item} alt={item} />
		</div>
	{/each}
	<button
		type="button"
		class="group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
		on:click={previous}
	>
		<span
			class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70"
		>
			<Icon path={mdiChevronLeft} />
			<span class="sr-only">Previous</span>
		</span>
	</button>
	<button
		type="button"
		class="group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
		on:click={next}
	>
		<span
			class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70"
		>
			<Icon path={mdiChevronRight} />
			<span class="sr-only">Next</span>
		</span>
	</button>
</div>
