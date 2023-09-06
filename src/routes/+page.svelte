<script>
	import Sidebar from '$lib/sidebar.svelte';
	import About from './About.svelte';
	import Home from './Home.svelte';
	import Project from './Project.svelte';
</script>

<div class="grid">
	<div class="item-grid">
		<Sidebar />
	</div>
	<div class="item-grid">
		<Home />
		<About />
		<Project />
	</div>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
</style>
