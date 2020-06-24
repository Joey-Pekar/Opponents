const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.join(__dirname, '../opponents-prod'),
        filename: 'index_bundle.js'
    },
    devServer : {
        inline: true,
        port: 3000
    },
    module: {
        rules: [
            {
               test: /\.jsx?$/,
               exclude: /node_modules/,
               loader: 'babel-loader',
               query: {
                  presets: ['env', 'react'],
                  plugins: ['transform-object-rest-spread', 'transform-class-properties']
               }
            },
            {
                test: /\.scss?$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
         ]
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}