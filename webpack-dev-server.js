var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var shell = require('shelljs');

new WebpackDevServer(webpack(config), {
    contentBase: 'public',
    historyApiFallback: true,
    port: 3000,
    hot: true,
    inline: true,
    //progress: true,
    stats: 'errors-only',
}).listen(3000, function () {
    shell.env.PORT = shell.env.PORT || 3001;
    shell.exec(`BABEL_ENV=server ./node_modules/.bin/babel-node server.js`, function () {});
    console.log('Webpack Dev Server listening on port 3000');
});