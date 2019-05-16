<template>
	<div id="app">
		<h1>{{ pessoas }}</h1>
	</div>
</template>

<script>
	const { spawn } = require('child_process');
	

	export default {
		data() {
			return {
				pessoas: 0
			}
		},
		created () {
			setInterval(() => {
				const ls = spawn('ls -l ../tempo_real | wc -l', {
					shell: true
				});

				ls.stdout.on('data', (data) => {
					this.pessoas = data;
				});

			}, 3000)
		}
	}
</script>

<style>
	h1 {
		font-size: 100px;
	}
</style>
