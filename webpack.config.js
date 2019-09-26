const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const webpack = require('webpack')

const env = require('dotenv').config({ path: __dirname + '/.env.example' })

const mode = process.env.NODE_ENV || 'development'

const prod = mode === 'production'

module.exports = {
  entry: {
    bundle: ['./src/main.js']
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].[id].js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          enforce: true,
          chunks: 'initial'
        }
      }
    }
  },
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte')
    },
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main']
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: true,
            hotReload: true
          }
        }
      },
      {
        test: /\.css$/,
        use: [prod ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader']
      }
    ]
  },
  mode,
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
      minify: process.env.NODE_ENV === 'production',
      favicon: path.join(__dirname, './public/favicon.png')
    }),
    new CompressionPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new Dotenv({
      silent: true,
      safe: false
    }),
    new webpack.EnvironmentPlugin(Object.keys(env.parsed))
  ],
  devtool: prod ? false : 'source-map'
}
