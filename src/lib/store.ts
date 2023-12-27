import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import type { Store } from '../app';

const store = writable<Store>({
	darkMode: browser && !window.matchMedia('(prefers-color-scheme: dark)').matches,
	asideOpen: browser && !window.matchMedia('(min-width: 768px)').matches,
	navigation: null
});

export default store;
