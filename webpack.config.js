var path = require('path');
var webpack = require('webpack');

var assets = path.resolve(__dirname, './bower_components/bootstrap-sass-official/assets/stylesheets')
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var ISPRODUCTION = process.env.NODE_ENV === 'production';
var devApp = ['webpack-dev-server/client?http://0.0.0.0:8080', 'webpack/hot/only-dev-server', "./app/main.js"];
var prodApp  = ["./app/main.js"];

var config = {
  entry: {
    app: ISPRODUCTION?prodApp:devApp,
    vendors: ['react', 'whatwg-fetch', 'classnames']
  },

  output:{
    path: ISPRODUCTION ? './dist' : './build',
    filename: "bundle.js"
  },

  resolve:{
    alias: {},
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.NoErrorsPlugin()
  ],

  module:{
    noParse: [],
    preLoaders: [
      {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
    ],
    loaders:[
      {test: /\.js$/, exclude: [node_modules_dir], loaders: ["react-hot", "babel-loader"]},
      {test: /\.scss$/, loader: "style-loader!css-loader!sass-loader?includePaths[]="+assets }
    ]
  }
}

module.exports = config;
