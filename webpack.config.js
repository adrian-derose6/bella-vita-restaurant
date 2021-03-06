const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    devServer: {
        open: true,
        publicPath: "",
        contentBase: path.resolve(__dirname, "dist"),
        watchContentBase: true,
        compress: true,
        writeToDisk: true
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader'],  
            },
            {   test: /\.(html)$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/templates/index.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/menu.html',
            inject: 'body',
            filename: 'menu.html'
        })
    ]
};