const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
	entry: './src/main.js',
	module: {
		rules: [
			{ test: /\.vue$/, use: 'vue-loader' },
			{ test: /\.css$/, use: ['vue-style-loader', 'css-loader']},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
		}),
		new VueLoaderPlugin(),
	],
	target: 'node-webkit' // To make child_process usable by Vuejs
};
