var path = require('path');
var webpack = require('webpack');

const PATHS  = {
  build: path.join(__dirname, 'www/build'),
  src: path.join(__dirname, 'www'),
  node_modules: path.join(__dirname, 'node_modules'),
}

module.exports = {
  devtool: 'eval-source-map',
  context: __dirname,
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:4000',
    'webpack/hot/only-dev-server',
    './index.js'
  ],
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.css|.scss$/,
        loader: 'style!css!sass?outputStyle=expanded'
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: PATHS.node_modules
      },
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 4000,
    colors: true,
    contentBase: PATHS.build,
    historyApiFallback: true,
    hot: true,
    inline: true,
    noInfo: true,
    progress: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};