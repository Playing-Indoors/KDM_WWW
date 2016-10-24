// webpack.config.js
var webpack = require('webpack');

var path = require('path'),
  assets_path = path.join('client'),
  node_modules_dir = path.join(__dirname, 'node_modules'),
  autoprefixer = require('autoprefixer');

var config = {
  context: path.resolve(assets_path),
  entry: [
    path.join(__dirname, '/src/routes.js')
  ],
  output: {
    path: path.join(__dirname, '/public/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  externals: {
    jquery: 'var jQuery'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.resolve(assets_path),
    alias: {}
  },
  devServer: {
    inline: true,
    port: 3333
  },
  devtool: "source-map",
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
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
  ]
};

console.log("Getting ready for production!");


module.exports = config;
