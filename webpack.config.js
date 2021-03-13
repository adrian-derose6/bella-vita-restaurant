const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        open: true,
        publicPath: "",
        contentBase: path.resolve(__dirname, "dist"),
        watchContentBase: true,
        compress: true,
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader'],  
            }
        ]
    }
};