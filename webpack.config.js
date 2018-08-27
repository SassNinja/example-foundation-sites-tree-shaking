const path = require('path');

module.exports = {
    mode: 'production',
    devtool: 'none',
    entry: {
        'example': './src/example.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        mainFields: ['module', 'browser', 'main']
    },
    externals: {
        jquery: 'jQuery'
    },
    optimization: {
        minimize: false,
        runtimeChunk: 'single'
    }
};