const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production'
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const sass = require('sass');

const result = sass.renderSync({
  silenceDeprecations: ['legacy-js-api'],
});
module.exports = {
  mode: isProduction ? 'production' : 'development',
  devtool: 'source-map', // включає source-map для sass-loader
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.scss$/, // .sass or .scss
        use: [
          // fallback to style-loader in development
          process.env.NODE_ENV !== "production"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
         
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
          {
            loader: 'webp-loader',
            options: {
              quality: 75,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      // Параметри, подібні до тих самих параметрів у webpackOptions.output
      // обидва параметри необов'язкові
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  devServer: {
    setupMiddlewares: (middlewares) => {
      // Ваші middleware функції
      middlewares.push(
        // Приклад middleware
        (req, res, next) => {
          console.log('Middleware працює!');
          next();
        }
      );

      return middlewares;
    }
  }

};
