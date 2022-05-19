const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
    root: path.resolve(__dirname, '..'),
    src: path.resolve(__dirname, '../src'),
    dist: path.resolve(__dirname, '../dist'),
    public: path.resolve(__dirname, '../public')
}

const DEV_SERVER = {
    historyApiFallback: true,
    port: 3000,
    hot: true,
}

module.exports = {
    mode: "development",
    entry: ["@babel/polyfill", path.resolve(PATHS.src, 'index.tsx')],
    output: {
        filename: "[name].[fullhash].js",
        path: PATHS.dist,
        publicPath: '/',
    },
    devServer: DEV_SERVER,
    plugins: [
        new HTMLWebpackPlugin(
            {
                template: path.resolve(PATHS.public, 'index.html')
            }
        ),
        new CleanWebpackPlugin,
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', ',jsx', '.css', '.scss']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader"},
                    { loader: "css-loader"},
                    { loader: "sass-loader"},
                ],
            },
            {
                test: /\.(jpg|jpeg|png|svg)/,
                use: [
                    "file-loader"
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test: /\.m?jsx$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-react', '@babel/preset-env']
                  }
                }
            },
            
        ]
    }
}