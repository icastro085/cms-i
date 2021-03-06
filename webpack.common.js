const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],

  devtool: 'inline-source-map',

  output: {
    filename: '[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Craze',
      template: './src/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('[name].css')
  ],

  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
    alias: {}
  },

  module: {
    rules: [
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules,localIdentName="[path]-[name]-[local]-[hash:base64:6]"',
            'less-loader?modules,localIdentName="[path]-[name]-[local]-[hash:base64:6]"',
          ],
        }),
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
          ],
        }),
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
};
