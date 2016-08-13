'use strict';

var	webpack = require('webpack');
var	gruntConfig = require('./grunt.conf.js');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var	HtmlWebpackPlugin = require('html-webpack-plugin');
var bourbon = require('node-bourbon').includePaths;
var alias = require('./alias')();

module.exports = {
    context: gruntConfig.srcPath,
    entry: {
        main: gruntConfig.srcPath + "/project/entry.jsx",
        vendor: ['react', 'react-dom', 'flux', 'underscore', 'q', 'babel-polyfill', 'classnames']
    },
    output: {
        path: gruntConfig.target,
        filename: 'js/[name].[chunkhash:8].bundle.js',
        chunkFilename: 'js/[id].[chunkhash:8].common.js'
    },
    resolveLoader: {
        modulesDirectories: [
            path.join(__dirname, "..", "node_modules")
        ]
    },
    resolve: {
        alias: alias,
        extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json']
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass?includePaths[]=" + bourbon)
            },
            {
                test: /\.css/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader") // ?sourceMap
            },
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets:['react']
                }
            },
            {
                test: /\.(woff2?|ttf|eot|svg)$/,
                loader: 'file'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ["common", "manifest"],
            chunks: ['main']
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Page Title',
            filename: 'index.html',
            template: gruntConfig.srcPath + "/index.html"
        })
    ]
};

