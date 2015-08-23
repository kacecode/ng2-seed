var autoprefixer = require('autoprefixer-core');

module.exports = {
    entry: './src/index.js',
    output: {
        path: './build',
        filename: 'bin.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less!postcss-loader' }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.coffee']
    },
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
    devServer: {
        contentBase: './build'
    }
};