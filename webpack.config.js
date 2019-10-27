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
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    open: false,
    overlay: {
      warnings: true,
      errors: true
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
        test: /\.m?js$/,
        include: [/svelte/],
        use: ['babel-loader']
      },
      {
        test: /\.svelte$/,
        use: [
          'babel-loader',
          {
            loader: 'svelte-loader',
            options: {
              emitCss: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [prod ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(gif|png|jpe?g|svg|woff|ttf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4000,
              name: '[path][name].[ext]'
            }
          }
        ]
      }
    ]
  },
  mode,
  plugins: [
    prod && new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
      minify: process.env.NODE_ENV === 'production',
      favicon: path.join(__dirname, './public/favicon.png')
    }),
    new CompressionPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    }),
    new Dotenv({
      silent: true,
      safe: false
    }),
    new webpack.EnvironmentPlugin(Object.keys(env.parsed))
  ].filter(Boolean),
  devtool: prod ? false : 'source-map',
  optimization: {
    runtimeChunk: { name: 'runtime' },
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      minChunks: 1,
      automaticNameDelimiter: '_',
      cacheGroups: {
        vendors: false,
        libs: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        polyfills: {
          test: /core-js/,
          name: 'polyfills',
          priority: 10
        }
      }
    }
  }
}
