<script>
	import TagStack from '$lib/TagStack.svelte';
</script>

<section id="projetos" class="project">
	<h2>Projetos</h2>
	<article class="card">
		<div class="card-img">
			<img src="/projects/wallet-control.gif" alt="" />
		</div>
		<div class="card-body">
			<h1>Wallet Control (FullStack)</h1>
			<p>
				Sistema de controle de finanças, baseado em cartaira. o sistema conta com registro de
				receitas e despesas vinculados a uma carteira.
			</p>
			<div class="tecnolgies">
				<TagStack>Reactjs</TagStack>
				<TagStack>Nextjs</TagStack>
				<TagStack>MYSQL</TagStack>
				<TagStack>Node (api)</TagStack>
			</div>
		</div>
	</article>
	<article class="card">
		<div class="card-img">
			<img src="/projects/dbmcode.png" alt="" />
		</div>
		<div class="card-body">
			<h1>dBmcode (devbymarcos-code)</h1>
			<p>Este é um projeto pessoal. o objetivo é ensinar outras pessoas sobre programação.</p>
		</div>
	</article>
	<article class="card">
		<div class="card-img">
			<img src="/projects/wallet-control.gif" alt="" />
		</div>

		<div class="card-body">
			<h1>Wallet Control</h1>
			<p>
				Sistema de controle de finanças, baseado em cartaira. o sistema conta com registro de
				receitas e despesas vinculados a uma carteira.
			</p>
		</div>
	</article>
</section>

<style>
	.project {
		height: 100vh;
	}
	.project h2 {
		color: var(--color-text-primary);
		font-size: 2rem;
		margin-bottom: 2rem;
	}
	.card {
		width: 100%;
		min-height: 100px;
		display: grid;
		grid-template-columns: 150px 1fr;
		gap: 2rem;
		padding: 2rem;
		border-radius: var(--radius);
		margin-bottom: 2rem;
	}
	.card-body {
		color: var(--color-text-primary);
	}
	.card h1 {
		color: var(--color-text-primary);
	}

	.card:hover {
		background-color: #000;
	}
	.card-img {
		width: 250px;
		overflow: hidden;
	}
	.card-img img {
		width: 150px;
		object-fit: contain;
		border-radius: var(--radius);
	}

	.tecnolgies {
		display: flex;
		gap: 12px;
		margin: 10px 0;
		flex-wrap: wrap;
	}
</style>
