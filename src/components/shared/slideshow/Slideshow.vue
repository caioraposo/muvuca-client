<template>
	<div id="slideshow">
		<div>
			<img src="uploads/enem.jpeg">
		</div>
	   	<div>
			<img src="uploads/pascoa.jpeg">
	   	</div>
	   	<div>
			<img src="uploads/semana_santa.png">
	   	</div>
		<div>
			<img src="uploads/engenharia_de_qualidade.png">
		</div>
	</div>
</template>

<script>
	const $ = require('jquery');


	export default {
		data() {
			return {
				tempo: 10000
			}
		},
		created() {
			$("#slideshow > div:gt(0)").hide();

			setInterval(function() { 
			  $('#slideshow > div:first')
				.fadeOut(3000)
				.next()
				.fadeIn(3000)
				.end()
				.appendTo('#slideshow');
			},  this.tempo);
		}
	}
</script>

<style scoped>
	#slideshow { 
		position: relative;
	}

	#slideshow > div { 
		position: absolute;
		z-index: -1;
		top: 0px; 
		left: 0px; 
		right: 0px; 
		bottom: 0px; 
	}

	img {
		width: 100%;
		height: auto;
	}

</style>
