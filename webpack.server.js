const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
module.exports = {
    // Inform webpack that we're building a bundle for nodeJS,
    // rather than for browser.
    target: 'node',

    // Tell webpack the root file of our application.
    entry: './src/index.js',

    // Tell webpack where to put the output file.
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    externals: [webpackNodeExternals()],

    // Tell webpack to run babel on every file it runs through
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', {targets: {browsers: ['last 2 versions'] }}]
                    ]
                }
            }
        ]
    }

}