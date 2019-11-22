const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const env = require('dotenv').config({ path: __dirname + '/.env.example' });

const mode = process.env.NODE_ENV || 'development';

const prod = mode === 'production';

module.exports = {
  devtool: prod ? false : 'cheap-module-source-map',
  entry: {
    bundle: ['./src/main.js'],
  },
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    open: false,
    quiet: true,
    overlay: {
      warnings: false,
      errors: true,
    },
  },
  optimization: {
    minimize: prod,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
      }),
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte'),
    },
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/,
        test: /\.(js|svelte)$/,
        options: {
          cache: true,
          emitWarning: true,
          emitError: false,
          failOnWarning: prod ? true : false,
          failOnError: true,
        },
      },
      {
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: true,
            hotReload: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          prod ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg|woff|ttf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4000,
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },
  mode,
  plugins: [
    new CleanWebpackPlugin(),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: ['You application is running on http://localhost:3000'],
      },
      clearConsole: true,
      additionalFormatters: [],
      additionalTransformers: [],
    }),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
      minify: process.env.NODE_ENV === 'production' ? true : false,
      favicon: path.join(__dirname, './public/favicon.png'),
    }),
    new CompressionPlugin(),
    new MiniCssExtractPlugin({
      filename: !prod ? '[name].css' : '[name].[hash].css',
    }),
    new OptimizeCSSAssetsPlugin({}),
    new Dotenv({
      silent: true,
      safe: false,
    }),
    new ErrorOverlayPlugin(),
    new webpack.EnvironmentPlugin(Object.keys(env.parsed)),
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: './src/sw.js',
      swDest: 'sw.js',
    }),
  ],
};
