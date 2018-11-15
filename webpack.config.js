const webpack = require("webpack");
const { TsConfigPathsPlugin } = require("awesome-typescript-loader");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        bundle: ["core-js", path.join(__dirname, "/src/app")]
    },

    output: {
        path: path.join(__dirname, "/search-project"),
        filename: "bundle.js",
        publicPath: "/"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
        modules: ["src", "node_modules"]
    },
    module: {
        rules: [{
                test: /\.(tsx|ts)?$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.scss?$/,
                loader: "style-loader!css-loader!sass-loader"
            },
            {
                test: /\.css?$/,
                loader: "style-loader!css-loader"
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: "file-loader"
            }
        ]
    },
    devtool: "source-map",
    devServer: {
        inline: true,
        compress: true,
        historyApiFallback: true,
        port: 3000,
        publicPath: "/",
        hot: true,
        watchOptions: {
            poll: 7000
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'}),
        new webpack.HotModuleReplacementPlugin(),
        new TsConfigPathsPlugin()
    ],
    watch: true,
    mode:'development'
};