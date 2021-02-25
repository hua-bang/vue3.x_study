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
          { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"]}
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    mode: "development"
};
