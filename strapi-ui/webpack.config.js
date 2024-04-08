const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./public/index.html",
  filename: "./index.html",
});

const moduleFederationPlugin = new ModuleFederationPlugin({
  name: "StrapiApp",
  filename: "remoteEntry.js",
  exposes: {
    "./Button": "./src/components/Button",
    "./Button1": "./src/components/Button1",
    "./List": "./src/components/List"
  },
  shared: {
    react: { singleton: true, eager: true },
    "react-dom": { singleton: true, eager: true },
  },
});

module.exports = {
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3001,
    historyApiFallback: {
      index: "/public/index.html",
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [moduleFederationPlugin, htmlPlugin],
};
