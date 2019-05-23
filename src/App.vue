<template>
	<div id="app">
		<h2>Total de pessoas: {{ total }}</h2>
		<h2>Pessoas no local: {{ pessoas }}</h2>
		<slideshow></slideshow>
	</div>
</template>

<script>
	const { spawn } = require('child_process');
	import Slideshow from './components/shared/slideshow/Slideshow.vue';
	

	export default {
		data() {
			return {
				total: 342,
				pessoas: 0
			}
		},
		created () {
			setInterval(() => {
				const ls = spawn('ls -l ../tempo_real | wc -l', {
					shell: true
				});

				ls.stdout.on('data', (data) => {
					parseInt(data);
					this.pessoas = data - 1;
				});

			}, 3000)
		},
		components: {
			'slideshow': Slideshow
		}
	}
</script>

<style>
	h2 {
		text-align: center;
		font-size: 50px;
		font-family: Helvetica;
	}
</style>
