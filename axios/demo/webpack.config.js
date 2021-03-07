const HtmlWebpackPlugin = require("html-webpack-plugin");
const {resolve} = require("path");
module.exports = {
    entry: ["./src/index.js","./src/index.html"],
    output: {
        filename: "main.js",
        path: resolve(__dirname,"build")
    },
    mode: "development",
    module: {
        rules: [
            { test: /\.html$/, use: ['raw-loader']}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    target: "web",
    devServer: {
        port: 8080,
        compress: true,
        open: true,
        hot: true
    }
};
