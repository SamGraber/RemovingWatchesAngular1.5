var path = require('path');

var webpack = require('webpack');

var webpackConfig = {
	entry: './source/bootstrap.js',
	output: {
		path: path.resolve('output'),
		filename: 'app.js',
	},
	externals: {
		'angular': 'angular'
	},
	devtool: 'inline-source-map',
	module: {
		loaders: [
			{
				test: /\.html$/,
				loader: 'raw-loader',
			},
		],
	},
};

module.exports = webpackConfig;