const {resolve}  = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "build.js",
        path: resolve(__dirname,"build")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(png|jpg|gif)$/,
                // use: ["url-loader",{loader:"file-loader",options:{}}],
                loader: "url-loader",
                options: {
                    publicPath: "./images/",
                    outputPath: "images/",
                    limit: 1024 * 8,     //8k以喜下转成base64
                    // name: '[hash].[ext]'
                    name: '[name][hash].[ext]'
                }
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                // 排除
                exclude: /\.(js|json|html|css|less|scss|png|gif|jpg|jpeg)$/,
                loader: "file-loader",
                options: {
                    outputPath: "font/",
                    publicPath: "./font",
                    name:"[name][hash].[ext]"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin()
    ],
    mode: "development"
}
