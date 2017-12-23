const webpack = require('webpack');

const path = require('path');

const pkg = require('../package.json');

const rootPath = path.resolve(__dirname, '../');

const config = {
  entry: path.resolve(rootPath, 'src', 'index.js'),
  output: {
    filename: `${pkg.name}.min.js`,
    path: path.resolve(rootPath, 'public'),
    //指定你的库的名称
    library: `${pkg.name}`,
    //指定你的模块输出类型，可以是commonjs,AMD,script形式,UMD模式
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  //
  plugins: [new webpack.optimize.UglifyJsPlugin()]
};

module.exports = config;
