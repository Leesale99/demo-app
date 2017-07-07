const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const extractSass = new ExtractTextPlugin({filename: "css/main.css"});

module.exports = {
  entry: './src/app/index.js',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader']
      }, {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            'css-loader', 'postcss-loader', 'sass-loader'
          ],
          // use style-loader in development
          fallback: "style-loader"
        })
      }, {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    stats: 'errors-only'
  },
  plugins: [
    extractSass,
    new HtmlWebpackPlugin({title: 'Demo App', template: 'src/index.html'}),
    new CleanWebpackPlugin(['dist/*'], {verbose: false})
  ]
};
