<script lang="ts">
	import store from '$lib/store';
</script>

<div class="container mx-auto p-8" class:pl-28={!$store.asideOpen}>
	<slot />
</div>
