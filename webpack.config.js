var autoprefixer = require('autoprefixer-core');

module.exports = {
    entry: {
        './src/index.ts': [
            'reflect-metadata',
            'rx',
            'zone',
            './src/index.ts'
        ]
    },
    output: {
        path: './build',
        filename: 'bin.js'
    },
    module: {
        loaders: [
            /*{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },*/
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!postcss-loader!less'
            }
        ]
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
    devServer: {
        contentBase: './build'
    }
};
