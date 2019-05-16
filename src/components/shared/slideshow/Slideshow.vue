<template>
	<div id="slideshow">
		<div>
			<img src="//farm6.static.flickr.com/5224/5658667829_2bb7d42a9c_m.jpg">
		</div>
	   	<div>
		 	<img src="//farm6.static.flickr.com/5230/5638093881_a791e4f819_m.jpg">
	   	</div>
	   	<div>
		 	Pretty cool eh? This slide is proof the content can be anything.
	   	</div>
	</div>
</template>

<script>
	const $ = require('jquery');


	export default {
		data() {
			return {
				tempo: 2000
			}
		},
		created() {
			$("#slideshow > div:gt(0)").hide();

			setInterval(function() { 
			  $('#slideshow > div:first')
				.fadeOut(1000)
				.next()
				.fadeIn(1000)
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
