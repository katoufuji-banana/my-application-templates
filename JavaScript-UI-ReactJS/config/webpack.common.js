const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: path.resolve("src", "index.jsx"),

    output: {
        path: path.resolve("dist"),
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.scss/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                            importLoaders: 1
                        }
                    },
                    "sass-loader"
                ]
            }
        ]
    },

    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            '@': path.resolve("src"),
        },
    },

    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
        ],
    },

};

