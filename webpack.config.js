const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const paths = {
  src: path.join(__dirname, '/src'),
  build: path.join(__dirname, '/build'),
}

var webpackConfig = {
  entry: path.join(paths.src, 'index.js'),
  output: {
    path: paths.build,
    filename: 'index.js',
  },
  plugins: [new HtmlWebpackPlugin()]
};

module.exports = webpackConfig;
