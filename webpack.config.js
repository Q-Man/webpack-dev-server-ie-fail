const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, './dist');
const srcPath = path.resolve(__dirname, './src');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {
    entry: {
        devServer: 'webpack/hot/only-dev-server',
        index: "./src/app/index.jsx"
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    plugins: [
        //Moves files
        new TransferWebpackPlugin([
            {from: 'www'},
        ], path.resolve(__dirname, "./src")),
    ],
    output: {
        path: buildPath,    //Path of output file
        filename: '[name].js',
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$|\.jsx$/,
                include: [srcPath],
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['es2015', 'react']
                    }
                }
            },
        ],
    },
    //Server Configuration options
    devServer: {
        contentBase: 'src/www',  //Relative directory for base of server
        hot: true,        //Live-reload
        inline: true,
        port: 3000,        //Port Number
        host: 'localhost',  //Change to '0.0.0.0' for external facing server
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
};

module.exports = config;
