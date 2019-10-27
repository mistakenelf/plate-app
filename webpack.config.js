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

const supportedBrowsers = [
  '>1%',
  'last 4 versions',
  'Firefox ESR',
  'not ie < 9'
];

const babelLoader = {
  loader: 'babel-loader',
  options: {
    presets: [
      ['@babel/preset-env', { targets: supportedBrowsers }]
    ]
  }
};

module.exports = {
  entry: {
    bundle: ['./src/main.js']
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].[id].js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte')
    },
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main']
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
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(html|svelte)$/,
            use: [
              babelLoader,
              {
                loader: 'svelte-loader',
                options: {
                  emitCss: true,
                  legacy: true
                }
              }
            ]
          },
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules\/(?!svelte)/,
        use: babelLoader
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
      minify: !prod ? undefined : {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
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
  ].filter(Boolean)
}
