<script>
	import Icon from '$lib/components/icon.svelte';
	import profile from '$lib/profile';
	import { mdiBriefcase, mdiSchool } from '@mdi/js';
</script>

<div
	class="border-b border-gray-300 after:-mb-px after:block after:w-1/4 after:border-b after:border-primary-500 after:content-['']"
>
	<h2 class="font-serif text-3xl font-bold">Resume</h2>
	<p class="mb-3 opacity-60">7+ Years of Experience</p>
</div>
<div class="my-8 grid grid-cols-1 gap-8">
	<div>
		<div
			class="mb-6 border-b border-gray-300 after:-mb-px after:block after:w-1/6 after:border-b after:border-primary-500 after:content-['']"
		>
			<h2 class="mb-2 font-serif text-xl">Employments</h2>
		</div>
		<ol class="relative border-s border-gray-200 dark:border-gray-700">
			{#each profile.employments as { title, company, location, description, startDate, endDate }, index (index)}
				<li class="mb-10 ms-8">
					<span
						class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800"
					>
						<Icon path={mdiBriefcase} size={0.75} class="text-primary-500" />
					</span>
					<h4 class="text-lg font-bold">{title}</h4>
					<p class="mb-2 text-sm font-normal text-gray-400 dark:text-gray-500">{company}</p>
					<h5>{location}</h5>
					<time class="mb-2 block text-sm text-gray-400 dark:text-gray-500">
						From {startDate} to {endDate ? endDate : 'present'}
					</time>
					<p class="text-gray-500 dark:text-gray-400">{description}</p>
				</li>
			{/each}
		</ol>
	</div>
	<div>
		<div
			class="mb-6 border-b border-gray-300 after:-mb-px after:block after:w-1/6 after:border-b after:border-primary-500 after:content-['']"
		>
			<h2 class="mb-2 font-serif text-xl">Educations</h2>
		</div>
		<ol class="relative border-s border-gray-200 dark:border-gray-700">
			{#each profile.educations as { title, college, location, description, startYear, endYear }, index (index)}
				<li class="mb-10 ms-8">
					<span
						class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800"
					>
						<Icon path={mdiSchool} size={0.75} class="text-primary-500" />
					</span>
					<h4 class="text-lg font-bold">{title}</h4>
					<p class="mb-2 text-sm font-normal text-gray-400 dark:text-gray-500">{college}</p>
					<h5>{location}</h5>
					<time class="mb-2 block text-sm text-gray-400 dark:text-gray-500">
						From {startYear} to {endYear ? endYear : 'present'}
					</time>
					<p class="text-gray-500 dark:text-gray-400">{description}</p>
				</li>
			{/each}
		</ol>
	</div>
</div>
