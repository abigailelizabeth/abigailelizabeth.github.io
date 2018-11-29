const webpack = require('webpack');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')
module.exports = {
    entry:  './src/index.js',
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: { loader: 'babel-loader' }
          },
          {
            test: /\.css$/,
            use: [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader']
          }
        ]
      },
    resolve: {
    extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: path.resolve(__dirname,'/dist'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin({
        filename: 'index.css',
        }),
    ],
    devServer: {
      hot: true,
      contentBase: './dist',
      historyApiFallback: true
    }
  };