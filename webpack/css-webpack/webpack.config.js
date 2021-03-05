const {resolve} = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        filename: "build.js",
        path: resolve(__dirname,"build"),
    },
    module: {
        rules: [
            { test: /\.css$/, use:["style-loader","css-loader"]}  //从右到左 先css-loader 在style-loader
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}
