<section class="sidebar">
	<div class="text">
		<h1>marcos juvêncio</h1>
		<p>
			Um desenvolvedor Web <span>FullStack</span>. Meu Objetivo é a resolução de problemas. através
			do desenvolvimento de software.
		</p>
	</div>
	<div class="btns">
		<a href="/#contato">Mensagem</a>
		<a
			href="https://api.whatsapp.com/send?phone=5541992169810&text=Tenho%20trabalho%20vamos%20conversar"
			>whatsapp</a
		>
	</div>
	<nav id="nav">
		<ul class="nav">
			<li>
				<a href="/#inicio">inicio</a>
			</li>
			<li>
				<a href="/#sobre">sobre</a>
			</li>
			<li>
				<a href="/#projetos">projetos</a>
			</li>
			<li>
				<a href="/#tecnologias">tecnologias</a>
			</li>
			<li>
				<a href="/#contato">contato</a>
			</li>
		</ul>
	</nav>
</section>

<style>
	.sidebar {
		position: fixed;
		top: 100px;
		max-width: 400px;
	}
	.text,
	.btns {
		margin-bottom: 2rem;
	}

	.text h1 {
		color: var(--color-text-primary);
		font-size: 2.5rem;
		text-transform: uppercase;
		margin-bottom: 1rem;
	}
	.text p {
		color: var(--color-text-primary);
		font-size: 1.2rem;
		font-family: 'Source Code Pro', monospace;
	}
	.text p span {
		color: yellow;
	}

	.btns {
		display: flex;
		gap: 1rem;
		align-items: center;
	}
	.btns a {
		color: #fff;
		padding: 1rem 1.5rem;
		text-transform: uppercase;
		font-weight: bold;
	}
	.btns a:first-child {
		border: 1px solid var(--color-purple);
		border-radius: 9999px;
	}
	.btns a:last-child {
		border: 1px solid var(--color-green);
		border-radius: 9999px;
	}
	.btns a:first-child:hover {
		background-color: var(--color-purple);
	}
	.btns a:last-child:hover {
		background-color: var(--color-green);
	}

	.nav li a {
		color: var(--color-text-primary);
		padding: 1rem;
		display: block;
		margin-left: 1rem;
		transition: all 0.2s ease-out;
	}
	.nav li {
		position: relative;
	}
	.nav li::before {
		content: '';
		width: 20px;
		height: 1px;
		background-color: aqua;
		display: block;
		position: absolute;
		top: 50%;
		transition: all 0.2s ease-out;
	}
	.nav li:hover::before {
		width: 40px;
	}
	.nav li a:hover {
		padding-left: 3rem;
	}
</style>
