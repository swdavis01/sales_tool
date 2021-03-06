var path = require( 'path' );
var config = require(path.resolve(__dirname, 'config.json'));

module.exports = {
  debug: true,
  entry: "./scripts/app.js",
  output: {
    filename: "bundle.js"
  },
  module: {
    /*preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'jshint-loader',
        esversion: 6
      }
    ],*/
    loaders: [
      {
        test: [/\.js$/, /\.es6$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  },
  externals: {
    'Config': JSON.stringify(config)
  }
}
