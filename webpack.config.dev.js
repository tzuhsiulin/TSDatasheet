const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: [
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/dev-server",
    path.resolve(__dirname, "./main.js"),
  ],
  output: {
    path: path.resolve(__dirname, "./]"),
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: "/node_module/",
        loader: "babel-loader",
        query: {
          plugins: ["transform-decorators-legacy"],
          presets: ["es2015"],
        },
      },
    ],
  },
  resolveLoader: {
    root: path.join(__dirname, "node_modules"),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  node: {
    fs: "empty",
    tls: "empty",
  },
  devtool: "source-map",
};
