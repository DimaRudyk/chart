'use strict';

// let ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: {
        home: './src/authorization/authorization.js'
    },
    output: {
        filename: 'bundle.js',
        
       
    },

    watch: true,

    devtool: "source-map",

    module: {

        loaders: [{
            test: /\.css/,
            loader: 'style!css'
        }, {
            test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
            loader: 'file?name=[path][name].[ext]'
        }]
    },

    // plugins: [
    //     new ExtractTextPlugin('[name].css', { allChunks: true })
    // ]

};