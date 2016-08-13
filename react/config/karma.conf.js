var path = require('path');
var webpack = require('webpack');
var bourbon = require('node-bourbon').includePaths;

var alias = require('./alias')();

require('phantomjs-polyfill');

module.exports = function (config) {

    config.set( {
        frameworks: [
            'jasmine'
        ],
        files: [
            '../node_modules/phantomjs-polyfill/bind-polyfill.js',
            '../src/unit/testHarness.js'
        ],
        plugins: [
            require('karma-webpack'),
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-phantomjs-launcher'),
            require('karma-firefox-launcher'),
            require('karma-safari-launcher')
        ],
        reporters: ['dots'],
        port: 9876,
        colors: true,
        autoWatch: false,
        browsers: ['Chrome', 'Firefox', 'Safari'],
        singleRun: true,
        webpack: {
            cache: true,
            devtool: 'inline-source-map',
            resolve: {
                alias: alias,
                extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json']
            },
            module: {
                loaders: [
                    {
                        test: /\.jsx?$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader',
                        query: {
                            presets:['react']
                        }
                    },
                    {
                        test: /\.scss$/,
                        loader: 'css-loader!sass?includePaths[]=' + bourbon
                    },
                    {
                        test: /\.(woff2?|ttf|eot|svg)$/,
                        loader: 'file'
                    }
                ]
            },
            plugins: [
                new webpack.ProvidePlugin({
                    React: "react",
                    "window.React": "react"
                })
            ]
        }

    } );

    // Set preprocessors after the fact in order to have a dynamic key
    config.preprocessors[path.normalize(__dirname + '/../src/unit/testHarness.js')] = ['webpack'];
};
