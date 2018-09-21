const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|eot|woff|woff2|ttf|svg)$/,
        use: "url-loader?limit=8192"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "public/index.html" }),
    new CleanWebpackPlugin("./dist")
  ]
};
