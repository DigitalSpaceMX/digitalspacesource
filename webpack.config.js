const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const neat = require('bourbon-neat').includePaths;
var APP_DIR = path.resolve(__dirname, 'assets/javascripts/react');

module.exports = {
  entry: "./assets/javascripts/main.js",
  output: {
    filename: "./static/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      },
      {
        test: /\.(s*)css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                url: false,
                minimize: true,
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                includePaths: [neat]
              }
            }
          ]
        })
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("./static/main.css"),
  ],
  watch: true
}