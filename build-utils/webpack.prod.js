const path = require("path");

module.exports = {
  mode: "production",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "../", "dist"),
    publicPath: "/react-weather-app/",
    filename: "bundle.js",
  },
};
