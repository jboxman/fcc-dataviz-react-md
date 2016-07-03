/*
  Initially forked from jackfranklin/react-hot-load-webpack-boilerplate
  Derived in part from
  https://github.com/shakacode/bootstrap-loader/blob/master/examples/basic/webpack.dev.config.js
  http://stackoverflow.com/questions/30870830/how-do-i-generate-sourcemaps-when-using-babel-and-webpack
*/

// TODO
// Try http://stackoverflow.com/questions/34213013/cannot-get-bootstrap-sass-to-work-with-webpack

var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const sassLoaders = [
  'style-loader',
  'css-loader',
  'sass-loader'
];

module.exports = {
  devtool: 'source-map',
  debug: true,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/source/index'
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'assets'),
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin() //,
    //new ExtractTextPlugin('style.css', {allChunks: true})
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css',
          'postcss'
        ]
      },
      {
        test: /\.scss$/,
        loader: sassLoaders.join('!'),
        include: path.join(__dirname, 'src')
      },
      /*
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!')),
        include: path.join(__dirname, 'src')
      },
      */
      // bootstrap-loader suggested loaders
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url?limit=10000"
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: 'file'
      }
    ]
  },
  sassLoader: {
    //indentedSyntax: 'sass',
    //includePaths: [path.resolve(__dirname, './src/sass')]
  },
  postcss:[autoprefixer]
};
