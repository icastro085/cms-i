const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const { config } = require('./src/config/development');

module.exports = merge(common, {
  devServer: {
    contentBase: './dist',
    hot: true
  },

  plugins: [
    new webpack.DefinePlugin({
      __APP_CONFIG__: JSON.stringify(config),
    }),
  ],
});
