const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const Dotenv = require('dotenv-webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    'app': [
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/js/index'
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve('./src')
    ]
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
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    // Generate an 'index.html' file with the <script> injected
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    // Allows the use of env files
    // new Dotenv({
    //   path: 'route/to/env/file'
    // })
  ]
};
