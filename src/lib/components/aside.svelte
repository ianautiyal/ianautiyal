<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '$lib/components/icon.svelte';
	import profile from '$lib/profile';
	import store from '$lib/store';
	import {
		mdiAccountOutline,
		mdiBookOutline,
		mdiChatOutline,
		mdiClipboardOutline,
		mdiGithub,
		mdiHomeOutline,
		mdiInstagram,
		mdiLinkedin,
		mdiMonitor,
		mdiTwitter
	} from '@mdi/js';

	const navLinks = [
		{ name: 'Home', path: '/', icon: mdiHomeOutline },
		{ name: 'About', path: '/about', icon: mdiAccountOutline },
		{ name: 'Resume', path: '/resume', icon: mdiBookOutline },
		{ name: 'Portfolio', path: '/portfolio', icon: mdiMonitor },
		{ name: 'Blog', path: '/blog', icon: mdiClipboardOutline },
		{ name: 'Contact', path: '/contact', icon: mdiChatOutline }
	];

	const socialLinks = [
		{ name: 'Github', path: profile.social.github, icon: mdiGithub },
		{ name: 'Linkedin', path: profile.social.linkedin, icon: mdiLinkedin },
		{ name: 'Twitter', path: profile.social.twitter, icon: mdiTwitter },
		{ name: 'Instagram', path: profile.social.instagram, icon: mdiInstagram }
	];
</script>

<aside class:collapsed={$store.asideOpen}>
	<ul class="space-y-5">
		{#each navLinks as { name, path, icon }, index (index)}
			<li>
				<a href={path} class="page-link" class:active={$page.url.pathname.startsWith(path)}>
					<Icon path={icon} size={1.5} />
					<span class="text-xs">{name}</span>
				</a>
			</li>
		{/each}
	</ul>

	<ul class="space-y-3">
		{#each socialLinks as { name, path, icon }, index (index)}
			<li>
				<a href={path} class="social-link" target="_blank" rel="noopener noreferrer">
					<Icon path={icon} size={1.5} />
					<span class="text-xs">{name}</span>
				</a>
			</li>
		{/each}
	</ul>
</aside>

<style lang="scss">
	aside {
		@apply fixed flex min-h-dvh w-20 flex-col justify-between gap-2 bg-transparent py-6 shadow shadow-gray-300 dark:shadow-gray-800;

		&.collapsed {
			@apply -ml-20;
		}

		ul {
			@apply flex flex-col items-center;

			li {
				a {
					@apply flex flex-col items-center justify-center text-gray-600 dark:text-gray-400;

					&.page-link {
						@apply h-12 w-12;
					}

					&.social-link {
						@apply h-10 w-10;
					}

					&:hover,
					&.active {
						@apply text-primary-500;
					}
				}
			}
		}
	}
</style>
