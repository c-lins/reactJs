var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {index: './index.js'},
    output: {
        path: __dirname + '/__build__',
        filename: '[name].js',//filename:'[name].js',将根据entry中的key生成名字
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                /* babel6 才需要配置这个，presets里面两个预编译插件，前一个用于编译es6，后一个用于编译react。按需配置。这个工程都需要。
                 query:{
                 presets: ['es2015','react']
                 }*/
            }
        ]
    }
};
