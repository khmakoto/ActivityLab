const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry:[
		'babel-polyfill',
		'react-hot-loader/patch',
		'webpack-hot-middleware/client',
		'./client/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
	module: {
    rules: [
      { test: /\.js$/,
        include: path.join(__dirname, 'client'),
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
		]
	},
	plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
	],
};
