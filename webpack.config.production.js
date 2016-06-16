'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'sourcemap',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.min.js',
    sourceMapFilename: 'bundle.map.js',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
    }, {
      test: /\.css$/,
      loaders: ['style', 'css']
    }],
  }
};