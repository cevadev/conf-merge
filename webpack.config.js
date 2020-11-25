const path = require("path");
//plugin para trabajar con html
const HtmlWebpackPlugin = require("html-webpack-plugin");

//plugin para trabajar con css
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  //entry-point: archivo principal o punto de entrada que leera webpack
  entry: "./src/index.js",
  //hacia donde enviaremos nuestros archivo o proyecto ya compilado
  output: {
    path: path.resolve(__dirname, "dist"), //dist la carpeta de "produccion"
    filename: "bundle.js", //nombre del archiv resultante o compilado de nuesrtra app
    publicPath: "/", //la raiz del proyecto es el public path
  },
  //indicamos las extesiones de archivos que vamos a utilizar en el proyecto
  resolve: {
    extensions: [".js", ".jsx"],
  },
  //reglas para la construccion de nuestros recursos
  module: {
    rules: [
      //esta regla va identificar los archivos con extensio .js o .jsx y trabajará con el babel-loader. Excluimos todos los archivos de node
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        //indicamos el uso del loader que necesitamos para procesar nuestros archivo
        use: {
          loader: "babel-loader",
        },
      },
      //regla para identificar y trabajar con html
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        //regla para trabajar con css
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    //creamos uns instancia de nuestro plugin
    new HtmlWebpackPlugin({
      //archivo donde va a inyectar el html
      template: "./public/index.html",
      //archivo final producido
      filename: "./index.html",
    }),

    new MiniCssExtractPlugin({
      filename: "assests[name].css",
    }),
  ],
  //creamos un servidor de trabajo local y ver los cambios en la app
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    historyApiFallback: true,
    port: 3000,
  },
};
