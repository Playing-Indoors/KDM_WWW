'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, '/src/routes.js')
  ],
  externals: {
    KDM_API: JSON.stringify('http://api.thewatcher.io')
  },
  output: {
    path: path.join(__dirname, '/public/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['eslint-loader']
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader'
      },
      {
        test   : /\.styl/,
        loader : 'style-loader!css-loader!stylus-loader'
      }, {
        test   : /\.css$/,
        loader : 'style-loader!css-loader!postcss-loader'
      }, {
        test   : /\.(png|jpg)$/,
        loader : 'url-loader?limit=8192'
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.json$/, loader: "json"
      }
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 5 versions'] }) ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: false
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'source-map',
  devServer: {
    colors: true,
    historyApiFallback: true,
    contentBase: './client',
    inline: true,
    hot: true,
    port: 3333
  },
  eslint: {
    configFile: './.eslintrc',
    formatter: require('eslint-friendly-formatter')
  },
};
