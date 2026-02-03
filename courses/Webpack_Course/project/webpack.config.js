const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const DotEnv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/images/[hash][ext][query]',
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@images': path.resolve(__dirname, 'src/assets/images/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@templates': path.resolve(__dirname, 'src/templates/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.css|.styl$/i,
        use: [MiniCSSExtractPlugin.loader, 'css-loader', 'stylus-loader'],
      },
      { test: /\.png/, type: 'asset/resource' },
      {
        test: /\.(woff|woff2)/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff',
            name: '[name].[contenthash].[ext]',
            outputPath: './assets/fonts/',
            publicPath: '../assets/fonts/',
            esModule: false,
          },
        },
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCSSExtractPlugin({ filename: 'assets/[name].[contenthash].css' }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src', 'assets/images'),
          to: 'assets/images',
        },
      ],
    }),
    new DotEnv(),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
};
