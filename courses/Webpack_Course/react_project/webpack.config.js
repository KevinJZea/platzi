const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CSSMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
    },
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      { test: /\.html$/, use: { loader: 'html-loader' } },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },

      /* { test: /\.png/, type: 'asset/resource' },
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
      }, */
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      /* inject: true, */
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCSSExtractPlugin({ filename: '[name].css' }),
    new CleanWebpackPlugin(),

    /* new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src', 'assets/images'),
          to: 'assets/images',
        },
      ],
    }),
    new DotEnv(),
    new BundleAnalyzerPlugin(), */
  ],
  optimization: {
    minimize: true,
    minimizer: [new CSSMinimizerPlugin(), new TerserWebpackPlugin()],
  },

  /* mode: 'development',
  devtool: 'source-map', */
};
