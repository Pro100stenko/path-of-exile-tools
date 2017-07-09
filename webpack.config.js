const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const supportedBrowsers = require("./browsers");

console.log(supportedBrowsers);

const paths = {
  src: path.join(__dirname, "/src"),
  build: path.join(__dirname, "/build"),
}
const webpackConfig = {
  entry: [
    "babel-polyfill",
    path.join(paths.src, "index.jsx"),
    path.join(paths.src, "scss/app.scss"),
  ],
  output: {
    path: paths.build,
    filename: "index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new ExtractTextPlugin("app.css"),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "react",
              ["env", {
                targets: {
                  browsers: supportedBrowsers,
                },
              }],
            ],
          },
        },
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader?importLoaders=1&minimize&sourceMaps&-autoprefixer",
            "postcss-loader",
            "sass-loader",
          ],
        }),
      },

    ],
  },
  devServer: {
    publicPath: "/",
  }
};

module.exports = webpackConfig;
