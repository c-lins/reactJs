var path = require('path');
var webpack = require('webpack')
module.exports = {
  entry:{
    index: './index.js'
  },
  output: {
    path: __dirname + '/__build__',
    filename: '[name].js',//filename:'[name].js',将根据entry中的key生成名字
  },
  module:{
    loaders: [{
      test: /\.js?$/,
      loader: 'babel',
      exclude: /node_modules/
    }]
  }
};
