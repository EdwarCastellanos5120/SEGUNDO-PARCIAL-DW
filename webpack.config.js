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
  optimization: {
    minimizer: [
      new HtmlMinimizerPlugin(), 
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "paginas", to: "paginas" },
        { from: "module", to: "module" },
      ],
    }),
  ],
};
