const path = require("path");
const { SourceMapDevToolPlugin } = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000
  },
  mode: "development"
};

module: {
  rules: [
    {
      test: /\.js$/,
      enforce: 'pre',
      use: ['source-map-loader'],
    }
  ]
};

plugins: [
  new SourceMapDevToolPlugin({
    filename: "[file].map"
  })
]