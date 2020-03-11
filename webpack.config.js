const path = require("path");

const SRC_DIR = path.join(__dirname, "client/src/");
const DIST_DIR = path.join(__dirname, "client/dist/");

module.exports = {
  entry: path.join(SRC_DIR, "App.jsx"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  output: {
    path: DIST_DIR,
    filename: "bundle.js"
  }
};
