var fs = require('fs')
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        'main': [path.join(__dirname, 'example/index.js')]
    },
    externals: {'react': 'React', 'react-dom': 'ReactDOM'},
    output: {
        path: path.join(__dirname, 'static'),
        publicPath: './',
        filename: '[name]_[chunkhash:5].js',
        chunkFilename: '[name]_[chunkhash:5].js'
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
        new webpack.optimize.UglifyJsPlugin({
            //压缩打包的文件
            compress: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({ 
            //更具模版生成html
            /**
             * title: 用来生成页面的 title 元素
             * filename: 输出的 HTML 文件名，默认是 index.html, 也可以直接配置带有子目录。
             * template: 模板文件路径，支持加载器，比如 html!./index.html
             * inject: true | 'head' | 'body' | false  ,注入所有的资源到特定的 template 或者 templateContent 中，如果设置为 true 或者 body，所有的 javascript 资源将被放置到 body 元素的底部，'head' 将放置到 head 元素中。
             * favicon: 添加特定的 favicon 路径到输出的 HTML 文件中。
             * minify: {} | false , 传递 html-minifier 选项给 minify 输出
             * hash: true | false, 如果为 true, 将添加一个唯一的 webpack 编译 hash 到所有包含的脚本和 CSS 文件，对于解除 cache 很有用。
             * cache: true | false，如果为 true, 这是默认值，仅仅在文件修改之后才会发布文件。
             * showErrors: true | false, 如果为 true, 这是默认值，错误信息会写入到 HTML 页面中
             * chunks: 允许只添加某些块 (比如，仅仅 unit test 块)
             * chunksSortMode: 允许控制块在添加到页面之前的排序方式，支持的值：'none' | 'default' | {function}-default:'auto'
             * excludeChunks: 允许跳过某些块，(比如，跳过单元测试的块)
             * 
             */
            title: 'tntui-docs',
            template: 'template/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            filename : path.join(__dirname, './static/index.html')
        }),
        new webpack.ProvidePlugin({
            prettyPrint: "prettify"
        }),
        new webpack.DefinePlugin({
            // definePlugin 接收字符串插入到代码当中, 所以你需要的话可以写上 JS 的字符串
            '__DEBUG__': false,
        }),
    ]
};
