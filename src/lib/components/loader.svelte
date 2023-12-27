<script lang="ts">
	import store from '$lib/store';
	import { onDestroy, onMount } from 'svelte';
	import { cubicOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	const progress = tweened(0, { duration: 3500, easing: cubicOut });

	const unsubscribe = store.subscribe(({ navigation }) => {
		if (navigation === 'loaded') {
			progress.set(1, { duration: 1000 });
		}
	});

	onMount(() => {
		progress.set(0.7);
	});

	onDestroy(() => {
		unsubscribe();
	});
</script>

<div class="fixed left-0 right-0 top-0 z-50 h-0.5">
	<div class="h-full w-[var(--width)] bg-primary-500" style={`--width: ${$progress * 100}%`} />
</div>
