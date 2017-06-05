var fs = require('fs')
var path = require('path')
var webpack = require('webpack')
module.exports = {
    devtool: 'eval-source-map',
    //出错以后就会采用source-map的形式直接显示你出错代码的位置
    entry: {
        'main': [path.join(__dirname, 'example/index.js')]
    },
    output: {
        path: path.join(__dirname, 'static'),
        publicPath: 'static/',
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel'
        } ,{
            test: /\.scss$/,
            loader: 'style!css!sass!postcss'
        }, {
            test: /\.less$/,
            loader: 'style!css!less?strictMath&noIeCompat!postcss'
        }, {
            test: /\.css$/, // Only .css files
            loader: 'style!css!postcss' // Run both loaders
        }, {
            test: /\.(jp[e]?g|png|gif|svg)$/,
            loader: 'url-loader?limit=8192'
        }]
    },
    postcss:[require('autoprefixer')],
    resolve: {
        extensions: ['', '.js', '.jsx', '.json', '.less'],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
        	prettify: path.join(__dirname, './example/lib/prettify.js')
        }
    },
    babel: {
        presets: ['es2015', 'stage-0','react'],
        plugins: ['transform-runtime',["import", { libraryName: "tnt-ui"}]]
    },
    plugins: [
        new webpack.NoErrorsPlugin(), //允许错误不打断程序
        new webpack.HotModuleReplacementPlugin(), //热更新  代码更新后浏览器自动刷新
        new webpack.optimize.UglifyJsPlugin({
            //压缩打包的文件
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            // definePlugin 接收字符串插入到代码当中, 所以你需要的话可以写上 JS 的字符串
            '__DEBUG__': true,
            'process.env': {
                // 'NODE_ENV': JSON.stringify('development')
                'NODE_ENV': JSON.stringify('production')
                
            }
        }),
        new webpack.ProvidePlugin({
            prettyPrint: "prettify"
        })
    ]
};
