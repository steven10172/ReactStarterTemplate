/**
 * Bundle module dependencies.
 */

'use strict';

var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var	ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
	webpack: {
		options: require('../../config/webpack.conf.js'),
		'dev': {
			plugins: [
				new ExtractTextPlugin("css/[name].css")
			],
			devtool: 'source-map',
			debug: true,
			cache: true
		},
		'prod': {
			plugins: [
				new ExtractTextPlugin("css/[name].[hash:8].css"),
				new ManifestPlugin(),
				new ChunkManifestPlugin({
					filename: "chunk-manifest.json",
					manifestVariable: "webpackManifest"
				}),
				new webpack.optimize.OccurenceOrderPlugin(),
				new webpack.optimize.DedupePlugin(),
				new webpack.optimize.UglifyJsPlugin(),
				new webpack.optimize.AggressiveMergingPlugin()
			],
			stats: {
				colors: true,
				reasons: true
			},
			cache: false,
			debug: false
		}
	}
};
