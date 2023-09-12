const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./module/aggregator.js", // Punto de entrada para el agregador
    calculos: "./module/calculos.js", // Punto de entrada para calculos.js
    imgViewer: "./module/imgViewer.js", // Punto de entrada para imgViewer.js
    passwordGen: "./module/passwordGen.js", // Punto de entrada para passwordGen.js
    taskList: "./module/taskList.js", // Punto de entrada para taskList.js
    unitConvert: "./module/unitConvert.js", // Punto de entrada para unitConvert.js
    indexCalculos : "./paginas/calculos/indexCalculos.js", // Punto de entrada para indexCalculos.js
    indexImgViewer : "./paginas/imgViewer/indexImgViewer.js", // Punto de entrada para indexImgViewer.js
    indexPasswordGen : "./paginas/passwordGen/indexPasswordGen.js", // Punto de entrada para indexPasswordGen.js
    indexTaskList : "./paginas/taskList/indexTaskList.js", // Punto de entrada para indexTaskList.js
    indexUnitConvert : "./paginas/unitConvert/indexUnitConvert.js", // Punto de entrada para indexUnitConvert.js
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].bundle.js',
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
      template: "./index.html", // Ruta al archivo HTML de entrada
      filename: "index.html",
      minify: {
        collapseWhitespace: true, // Minimiza espacios en blanco
        removeComments: true, // Elimina comentarios
        removeRedundantAttributes: true, // Elimina atributos redundantes
        removeScriptTypeAttributes: true, // Elimina atributos de tipo de script
        removeStyleLinkTypeAttributes: true, // Elimina atributos de tipo de enlace de estilo
        useShortDoctype: true, // Usa el doctype corto
      },
    }),

    new HtmlWebpackPlugin({
      template: "./paginas/calculos/calculos.html", // Ruta al archivo HTML de entrada
      filename: "calculos.html",
      minify: {
        collapseWhitespace: true, // Minimiza espacios en blanco
        removeComments: true, // Elimina comentarios
        removeRedundantAttributes: true, // Elimina atributos redundantes
        removeScriptTypeAttributes: true, // Elimina atributos de tipo de script
        removeStyleLinkTypeAttributes: true, // Elimina atributos de tipo de enlace de estilo
        useShortDoctype: true, // Usa el doctype corto
      },
    }),

    new HtmlWebpackPlugin({
      template: "./paginas/imgViewer/imgViewer.html", // Ruta al archivo HTML de entrada
      filename: "imgViewer.html",
      minify: {
        collapseWhitespace: true, // Minimiza espacios en blanco
        removeComments: true, // Elimina comentarios
        removeRedundantAttributes: true, // Elimina atributos redundantes
        removeScriptTypeAttributes: true, // Elimina atributos de tipo de script
        removeStyleLinkTypeAttributes: true, // Elimina atributos de tipo de enlace de estilo
        useShortDoctype: true, // Usa el doctype corto
      },
    }),

    new HtmlWebpackPlugin({
      template: "./paginas/passwordGen/passwordGen.html", // Ruta al archivo HTML de entrada
      filename: "passwordGen.html",
      minify: {
        collapseWhitespace: true, // Minimiza espacios en blanco
        removeComments: true, // Elimina comentarios
        removeRedundantAttributes: true, // Elimina atributos redundantes
        removeScriptTypeAttributes: true, // Elimina atributos de tipo de script
        removeStyleLinkTypeAttributes: true, // Elimina atributos de tipo de enlace de estilo
        useShortDoctype: true, // Usa el doctype corto
      },
    }),
    new HtmlWebpackPlugin({
      template: "./paginas/unitConvert/unitConvert.html", // Ruta al archivo HTML de entrada
      filename: "unitConvert.html",
      minify: {
        collapseWhitespace: true, // Minimiza espacios en blanco
        removeComments: true, // Elimina comentarios
        removeRedundantAttributes: true, // Elimina atributos redundantes
        removeScriptTypeAttributes: true, // Elimina atributos de tipo de script
        removeStyleLinkTypeAttributes: true, // Elimina atributos de tipo de enlace de estilo
        useShortDoctype: true, // Usa el doctype corto
      },
    }),
    new HtmlWebpackPlugin({
      template: "./paginas/taskList/taskList.html", // Ruta al archivo HTML de entrada
      filename: "taskList.html",
      minify: {
        collapseWhitespace: true, // Minimiza espacios en blanco
        removeComments: true, // Elimina comentarios
        removeRedundantAttributes: true, // Elimina atributos redundantes
        removeScriptTypeAttributes: true, // Elimina atributos de tipo de script
        removeStyleLinkTypeAttributes: true, // Elimina atributos de tipo de enlace de estilo
        useShortDoctype: true, // Usa el doctype corto
      },
    }),
  ],
};
