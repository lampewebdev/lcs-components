/* eslint-disable @typescript-eslint/no-var-requires */
const { VueLoaderPlugin } = require("vue-loader");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { DefinePlugin } = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    app: "./playground/index.ts",
  },
  module: {
    rules: [
      // {
      //   test: /\.tsx?$/,
      //   loader: "ts-loader",
      //   options: {
      //     appendTsSuffixTo: [/\.vue$/],
      //   },
      //   exclude: /node_modules/,
      // },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.(ts|js)x?$/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
            options: {
              esModule: false,
            },
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              implementation: require("sass"),
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".vue", ".json", ".scss"],
    alias: {
      vue$: "@vue/runtime-dom",
    },
    modules: ["node_modules"],
  },
  plugins: [
    new DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      template: "./playground/index.html",
    }),
  ],
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
    port: 3001,
  },
};
