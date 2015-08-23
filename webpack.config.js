var autoprefixer = require('autoprefixer-core');

module.exports = {
    entry: {
        './src/index.js': [
            'reflect-metadata',
            'rx',
            './src/index.js'
        ]
    },
    output: {
        path: './build',
        filename: 'bin.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less!postcss-loader'
            }
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