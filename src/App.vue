<template>
	<div id="app">
		<div class="pessoas">
			<h2>Total de pessoas: {{ total }}</h2>
			<h2>Pessoas no local: {{ pessoas }}</h2>
		</div>
		<slideshow></slideshow>
	</div>
</template>

<script>
const { spawn } = require('child_process');
import Slideshow from './components/shared/slideshow/Slideshow.vue';


export default {
	data() {
		return {
			total: 0,
			pessoas: 0,

			// Comandos para verificar a quantidade de pessoas
			cmd_total: '',
			cmd_tempo_real: '',
			// A cada
			tempo: 300000
		}
	},
	created () {
		// A cada this.tempo milisegundos os comandos serão executados
		setInterval(() => {
			const total = spawn(this.cmd_total, {
				shell: true
			});

			const tempo_real = spawn(this.cmd_tempo_real, {
				shell: true
			});


			total.stdout.on('data', (data) => {
				parseInt(data);
				this.total = data - 1;
			});


			tempo_real.stdout.on('data', (data) => {
				parseInt(data);
				this.pessoas = data - 1;
			});

		}, this.tempo)
	},
	components: {
		'slideshow': Slideshow
	}
}
</script>

<style>
.pessoas {
	border: 5px solid lightgray;
	border-radius: 20px;
	margin: 10px;
	padding-left: 700px;
	background-color: gray;
}

.pessoas h2 {
	font-size: 50px;
	color: white;
	font-family: Helvetica;
}
</style>
