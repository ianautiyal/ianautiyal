<script lang="ts">
	export let path: string;
	export let size: number = 1;

	const [width, height] = [24 * size, 24 * size];

	$: props = { width, height, ...$$restProps };
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 24 24`} fill="currentColor" {...props}>
	<path d={path} fill="currentColor" />
</svg>
