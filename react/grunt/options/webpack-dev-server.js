/**
 * Bundle module dependencies.
 */

'use strict';

var webpack = require('webpack');
var webpackConfig = require('../../config/webpack.conf.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	"webpack-dev-server": {
		options: {
			webpack: webpackConfig,
			port: 8883
		},
		start: {
			keepAlive: true,
			webpack: {
				devtool: 'source-map',
				debug: true,
				cache: true,
				output: {
					filename: 'js/[name].bundle.js',
					chunkFilename: 'js/[id].common.js',
					publicPath: 'http://localhost:8883/'
				},
				plugins: [
					new ExtractTextPlugin("css/[name].css")
				]
			}
		}
	}
};
