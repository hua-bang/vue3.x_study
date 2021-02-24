const {resolve} = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {

    // entry配置
    // 1.单入口 String 如果只有一个入口，使用字符串，指定一个入口文件，打包一个chunk，输出一个bundle，chunk名称是默认
    // entry: "./src/index.js",    //默认是./src/index.js

    // 2.多入口 Array 写多个入口文件 所有的入口文件形成一个chunk 名称是默认的 输出也是只有一个bundle
    // entry: ["./src/index.js","./src/main.js"],

    // 3.Object 多入口 有几个入口文件就会生成多少个chunk,并输出几个bundle chunk的名称是key
    // entry: {
    //     one: "./src/index.js",
    //     two: "./src/main.js"
    // },

    // 4.Object 特殊用法 即在Object的用法中使用了数组的配置方法 对象中有几个元素 就生成多少个chunk 并输出多少个bundle 但每个bundle是由每个元素指定的字符串或数组元素中的文件所组合而成
    // entry: {
    //     one: ["./src/index.js","./src/main.js"],
    //     two: "./src/main.js"
    // },

    entry: {
        vendor: ["./src/js/jquery.js","./src/js/common.js"],
        index: "./src/js/index.js",
        cart: "./src/js/cart.js"
    },
    mode: "development",  //生产模式production 开发模式 development
    output: {
        filename: "[name].js",   //文件名 默认是main.js 加了中括号表示变量
        path: resolve(__dirname,"build")    //resolve(__dirname)项目的根目录
    },
    // loader 告诉webpack规则，什么资源用什么loader
    module: {
        rules: [

        ]
    },

    plugins: [
        // 默认创建一个空的，目的是自动引入打包的资源(js/css) 会自动帮我们引入资源
        new HtmlWebpackPlugin({
            template: "./src/index.html",   //会按这个文件输出
            filename: "index.html",  //输出的文件名称,
            chunks: [ "vendor", "index" ],  //指定chunk 会引入相应的资源 按顺序引入
            minify: {
                collapseWhitespace: true,   //移除空格
                removeComments: true,   //移除注释
            }
        }),
        new HtmlWebpackPlugin({
            template: "./src/cart.html",   //会按这个文件输出
            filename: "cart.html",  //输出的文件名称,
            chunks: [ "vendor", "cart" ],   //指定chunk 会引入相应的资源 按顺序引入
            minify: {
                collapseWhitespace: true,   //移除空格
                removeComments: true,   //移除注释
            }
        }),
    ]
}
