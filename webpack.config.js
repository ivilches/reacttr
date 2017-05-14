const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssModules = 'modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]';

module.exports = {
    // extensiones de los ficheros que queremos que vigile webpack
    resolve: {
        // https://github.com/webpack/webpack/issues/3043
        extensions: ['*', '.js', '.jsx']
    },

    // punto de entrada de la aplicación
    entry: ['./src/index.jsx'],

    // fichero final (main en el package.json)
    output: {
        filename: 'app.js',
        // https://github.com/aspnet/JavaScriptServices/issues/782
        // http://stackoverflow.com/questions/42940050/configuration-output-path-the-provided-value-public-is-not-an-absolute-path
        path:  __dirname + '/build',
        publicPath: '/'
    },

    module: {
        loaders: [
            // transpilador
            // qué tipos de ficheros debe atender: con las extensiones js ó jsx, que no estén en node_modules, y debe
            // hacerse mediante el cargador babel
            {test: /(\.js|jsx)$/, exclude: /node_modules/, loaders: ['babel-loader']  },
            {test: /\.css$/, loader: `style-loader!css-loader?${cssModules}` }
        ]
    },

    devServer: {
        host: '0.0.0.0',
        port: 8080,
        inline: true
    },

    plugins: [
        new HtmlWebpackPlugin({ template: './src/assets/index.html' }),
        new ExtractTextPlugin({filename: 'style.css', allChunks: true})
    ]


}
