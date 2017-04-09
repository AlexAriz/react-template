const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: {
    'app': [
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/js/index'
    ]
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // JS
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src', 'js'),
        loader: 'babel-loader'
      },
      // SCSS
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src', 'assets', 'scss'),
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  }
}