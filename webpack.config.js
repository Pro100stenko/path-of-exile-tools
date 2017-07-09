const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const paths = {
  src: path.join(__dirname, "/src"),
  build: path.join(__dirname, "/build"),
}

const webpackConfig = {
  entry: [
    "babel-polyfill",
    path.join(paths.src, "index.jsx")
  ],
  output: {
    path: paths.build,
    filename: "index.js",
  },
  plugins: [new HtmlWebpackPlugin({
    template: "src/index.html",
  })],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["react", ["env", {
              targets: {
                  browsers: [
                    ">1%",
                    "last 4 versions",
                    "Firefox ESR",
                    "not ie < 9",
                  ],
                },
              }],
            ],
          }
        }
      }
    ]
  },
  devServer: {
    publicPath: "/",
  }
};

module.exports = webpackConfig;
