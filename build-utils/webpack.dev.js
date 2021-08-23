const path = require("path");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  output: {
    path: path.resolve(__dirname, "../", "dist"),
    publicPath: "/",
    filename: "bundle.js",
  },
};
