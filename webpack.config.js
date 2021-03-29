const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const MinimizeCssPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const webpack = require('webpack');

console.log(process.env.NODE_ENV);
console.log(__dirname);
const isDev = process.env.NODE_ENV === "development";
const optimization = () => {
    const config = {
        splitChunks: {
            chunks: "all"
        }
    };

    if (!isDev) {
        config.minimizer = [new MinimizeCssPlugin(), new TerserWebpackPlugin(),];
    }

    return config;
};

const cssLoaders = (extra) => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                publicPath: ""
            }
        }, {
            loader: "css-loader"
        },
    ]

    if (extra) {
        loaders.push(extra)
    }

    return loaders;
}

console.log('IsDev:', isDev);

module.exports = {
    context: path.resolve(__dirname),
    entry: path.join(__dirname, "src", "index.js"),
    output:
        {
            filename: "[name].[contenthash].js",
            path: path.resolve(__dirname, "dist")
        },

    optimization: optimization(),

    devServer: {
        hot: true,
        // liveReload: true,
        // watchContentBase: true,
        port: 4200
    },

    plugins: [
        new HTMLWebpackPlugin(
            {
                title: 'Evermix',
                template: "./index.html",
                minify: {
                    collapseWhitespace: !isDev
                }
            }
        ),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(
            {filename: "[name].[contenthash].css"}
        ),
    ],
    externalsType: 'script',

    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders()
            }, {
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader')
            },
            {
                test: /\.(ico|gif|png|jpg|jpeg|svg)$/,
                // type: "asset/resource",
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'src/img/'
                }
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath: '/src/fonts/'
                        }
                    }
                ],
            },
        ]
    }
};
