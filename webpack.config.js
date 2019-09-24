const Dotenv = require('dotenv-webpack')
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
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte')
    },
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main']
  },
  output: {
    path: __dirname + '/public',
    filename: '[name].js',
    chunkFilename: '[name].[id].js'
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
