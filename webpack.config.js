const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

const pagesFiles = fs.readdirSync('./src/pages');
const pageNames = pagesFiles.filter((page) => page.endsWith('.pug') || page.endsWith('html'));
const multipleHtmlPlugins = pageNames.map((fullName) => {
  const name = fullName.split('.')[0];
  return new HtmlWebpackPlugin({
    filename: `${name}.html`,
    template: `./src/pages/${fullName}`,
    minify: false,
  });
});

const config = {
  target: 'browserslist',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    clean: true,
  },
  devtool: 'source-map',
  devServer: {
    open: true,
    host: 'localhost',
  },
  plugins: [
    ...multipleHtmlPlugins,
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(svg|png|jpg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'media/[name][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          minimize: false,
        },
      },
      {
        test: /\.pug$/i,
        loader: 'pug-loader',
        options: {
          pretty: true,
        },
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
};
