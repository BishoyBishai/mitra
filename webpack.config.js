const webpack = require("webpack");
const {
    TsConfigPathsPlugin
} = require("awesome-typescript-loader");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        bundle: ["core-js", path.join(__dirname, "/src/app")],
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
                use: [process.env.NODE_ENV === 'production' ? {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: './'
                    }
                } : "style-loader", "css-loader", "sass-loader", {
                    loader: 'sass-resources-loader',
                    options: {
                        resources: [path.join(__dirname, "/src/assets/scss/colors.scss")]
                    },
                }]
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
            template: 'src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new TsConfigPathsPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    watch: true,
    mode: 'development'
};