<script lang="ts">
	import profile from '$lib/profile';
	import seo from '$lib/seo';
</script>

<svelte:head>
	<title>{seo.home.title} | {profile.name}</title>
	<meta name="description" content={seo.home.description} />
</svelte:head>

<div>
	<h1>{profile.name}</h1>
	<p>{profile.bio}</p>
</div>

<style lang="scss">
	div {
		background-image: url(../lib/assets/home-background.jpg);
		@apply relative -z-10 flex min-h-dvh flex-col items-center justify-center bg-cover bg-center bg-no-repeat;

		&::before {
			content: '';
			@apply absolute inset-0 -z-10 bg-white opacity-70 dark:bg-gray-900;
		}

		h1 {
			@apply mb-2 font-serif text-6xl font-bold uppercase max-md:text-4xl;
		}

		p {
			@apply tracking-widest max-md:text-sm;
		}
	}
</style>
