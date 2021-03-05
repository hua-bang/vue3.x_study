const {resolve} = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "build.js",
        path: resolve(__dirname,"build")
    },
    mode: "development",
    module: {
        rules: [
            {test:/\.css$/,use:[MiniCssExtractPlugin.loader,"css-loader"]},
            {test:/\.less$/,use:[MiniCssExtractPlugin.loader,"css-loader","less-loader"]},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "demo.css"
        })
    ]
};
