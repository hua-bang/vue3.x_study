const {resolve} = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin")

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "build.js",
        path: resolve(__dirname,"build")
    },
    mode: "development",
    module: {
        rules: [
            {test:/\.css$/,use:[MiniCssExtractPlugin.loader,"css-loader","postcss-loader"]},
            {test:/\.less$/,use:[MiniCssExtractPlugin.loader,"css-loader","less-loader","postcss-loader"]},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "demo.css"
        }),
        new OptimizeCssAssetsWebpackPlugin()
    ]
};
