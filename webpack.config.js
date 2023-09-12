const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./module/aggregator.js",
    calculos: "./module/calculos.js",
    imgViewer: "./module/imgViewer.js",
    passwordGen: "./module/passwordGen.js",
    taskList: "./module/taskList.js",
    unitConvert: "./module/unitConvert.js",
    indexCalculos: "./paginas/calculos/indexCalculos.js",
    indexImgViewer: "./paginas/imgViewer/indexImgViewer.js",
    indexPasswordGen: "./paginas/passwordGen/indexPasswordGen.js",
    indexTaskList: "./paginas/taskList/indexTaskList.js",
    indexUnitConvert: "./paginas/unitConvert/indexUnitConvert.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].bundle.js',
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new HtmlWebpackPlugin({
      template: "./paginas/calculos/calculos.html",
      filename: "paginas/calculos/calculos.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new HtmlWebpackPlugin({
      template: "./paginas/imgViewer/imgViewer.html",
      filename: "paginas/imgViewer/imgViewer.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),

    new HtmlWebpackPlugin({
      template: "./paginas/passwordGen/passwordGen.html",
      filename: "paginas/passwordGen/passwordGen.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),

    new HtmlWebpackPlugin({
      template: "./paginas/unitConvert/unitConvert.html",
      filename: "paginas/unitConvert/unitConvert.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),

    new HtmlWebpackPlugin({
      template: "./paginas/taskList/taskList.html",
      filename: "/paginas/taskList/taskList.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
  ],
};
