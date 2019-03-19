const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const getAdress = require('./address');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		historyApiFallback: true,
		// contentBase: './dist',
    compress: true,
    port: 9000,
		host: getAdress(),
		hot: true
	},
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
});


