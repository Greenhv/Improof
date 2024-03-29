var webpack = require('webpack');
var path = require('path');

const PATHS  = {
  build: path.join(__dirname, 'www'),
  node_modules: path.join(__dirname, 'node_modules'),
}

module.exports = {
  devtool: 'eval-source-map',
  context: __dirname,
  entry: [
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
        loader: 'style!css!sass'
      },
      {
        test: /\.js$|\.jsx$/,
        loader: 'babel',
        exclude: PATHS.node_modules
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};

