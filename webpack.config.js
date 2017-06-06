var path = require('path');
var merge = require('webpack-merge');
var webpack = require('webpack');
const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

const PATHS = {
    build: path.join(__dirname, 'build')
};

const common = {
    //context: __dirname + '/src',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/,

            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader?modules'],
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader?modules', 'postcss-loader', 'sass-loader'],
            }
        ],
    },

    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },

};

// npm startを実行した時の設定
if (TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {
        entry: [
            'webpack-dev-server/client?http://localhost:3000',
            './client.js'
        ],
        output: {
            path: PATHS.build,
            filename: 'main.js',
        },

        devServer: {
            contentBase: 'public',
            historyApiFallback: true,
            port: 3000,
            hot: true,
            inline: true,
            //progress: true,
            stats: 'errors-only',
        },

        devtool: 'eval-source-map',

        plugins: [
            new webpack.HotModuleReplacementPlugin(),
        ]
    });
}

// npm buildを実行した時の設定
if (TARGET === 'build') {
    module.exports = merge(common, {
        entry: [
            './client.js'
        ],
        output: {
            path: PATHS.build,
            filename: 'main.min.js'
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production'),
                }
            }),
            // new webpack.HotModuleReplacementPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
        ]
    });
}

// npm dev-buildを実行した時の設定
if (TARGET === 'dev-build') {
    module.exports = merge(common, {
        entry: [
            './client.js'
        ],
        output: {
            path: PATHS.build,
            filename: 'main.js'
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('development'),
                }
            }),
            // new webpack.HotModuleReplacementPlugin(),
        ]
    });
}
