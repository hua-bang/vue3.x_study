const {resolve} = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "build.js",
        path: resolve(__dirname,"build")
    },
    module: {
      rules: [
          { test: /\.less$/, use: [ "style-loader", "css-loader", "less-loader" ] },    //从右到左 less-loader将less文件编译成css 然后再用css-loader引入到chunk中 最后用style-loader插入
          { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"]},
          {
              // eslint 只检测js代码
              test: /\.js$/,
              //只检查自己的代码 第三方代码不用检查
              exclude: /node_modules/,
              loader: "eslint-loader",
              options: {
                  fix: true //修复
              }
          }
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    //在webpack5 需要加上这个配置项才能自动刷新
    target: "web",
    mode: "development",
    devServer: {
        port: 3001,
        compress: true,
        open: true
    }
};
