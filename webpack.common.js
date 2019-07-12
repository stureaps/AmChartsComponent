const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js'
    },

    output: {
        path: path.join(__dirname, 'AppHtml', 'amCharts'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: 'amCharts/'
    },

    plugins: [
        new CleanWebpackPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['source-map-loader'],
                enforce: 'pre'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules\\(?!@amcharts)/,
                loader: 'babel-loader'
            }
        ]
    }
};