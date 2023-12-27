<script>
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import Aside from '$lib/components/aside.svelte';
	import Icon from '$lib/components/icon.svelte';
	import Loader from '$lib/components/loader.svelte';
	import store from '$lib/store';
	import { mdiLightbulbOff, mdiLightbulbOn, mdiMenuClose, mdiMenuOpen } from '@mdi/js';
	import { fade } from 'svelte/transition';
	import '../app.scss';

	beforeNavigate(() => {
		$store.navigation = 'loading';
	});

	afterNavigate(() => {
		$store.navigation = 'loaded';
	});

	function toggleDarkMode() {
		$store.darkMode = !$store.darkMode;

		document.documentElement.classList.toggle('dark', !$store.darkMode);
	}

	function toggleAside() {
		$store.asideOpen = !$store.asideOpen;
	}
</script>

{#if $store.navigation === 'loading'}
	<div out:fade={{ delay: 300 }}>
		<Loader />
	</div>
{/if}

<Aside />
<div class="absolute right-4 top-4 space-x-2">
	<a href={null} on:click={toggleAside} class="hidden max-md:inline-block">
		<Icon path={$store.asideOpen ? mdiMenuClose : mdiMenuOpen} />
	</a>
	<a href={null} on:click={toggleDarkMode} class="inline-block">
		<Icon path={$store.darkMode ? mdiLightbulbOff : mdiLightbulbOn} class="rotate-180" />
	</a>
</div>
<slot />
