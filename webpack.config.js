module.exports = {
    entry: './src/index.js',
    output: {
        path: './build',
        filename: 'bin.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader' }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.coffee']
    },
    devServer: {
        contentBase: './build'
    }
};