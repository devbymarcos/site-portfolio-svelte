<script>
	import Sidebar from '$lib/sidebar.svelte';
</script>

<div class="grid">
	<div class="item-grid">
		<Sidebar />
	</div>
	<div class="item-grid" />
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
</style>
