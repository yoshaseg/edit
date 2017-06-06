import express from 'express';
import React from 'react';
import ReactDomServer from 'react-dom/server';
import {Provider} from 'react-redux';
import {match, RouterContext} from 'react-router'
import Helmet from 'react-helmet';
import path from 'path';

import configureStore from './configureStore';
import routes from './routes';
import HtmlComponent from './src/Html';

const application = express();
const port = 3000;

application.use('/public', express.static('build'));
// レイアウト、モジュールの情報置き場
application.use('/demo-api', express['static'](path.join(__dirname, '/public/demo-api')));
application.use('/demo-asset', express['static'](path.join(__dirname, '/public/demo-asset')));

application.get('*', handleRender);

function safeStringify(obj) {
    return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}

function handleRender(req, res) {
    match({routes, location: req.url}, (error, redirectLocation, renderProps) => {

        if (error) {
            res.status(500).send(error.message)
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {

            const store = configureStore();

            const components = renderProps.components.filter(component => component.fetchData);

            let tasks = components.map(component => {
                return new Promise(function (resolve, reject) {
                    store.dispatch(component.fetchData(resolve, reject, renderProps));
                });
            });

            Promise.all(tasks).then(() => {
                const markup = ReactDomServer.renderToString(
                    <Provider store={store}>
                        <RouterContext {...renderProps} />
                    </Provider>
                );
                const preLoadedState = store.getState();
                const htmlElement = React.createElement(HtmlComponent, {
                    store: store,
                    clientFile: application.get("env") === 'production' ? 'main.min.js' : 'main.js',
                    state: `window.__PRELOADED_STATE__ = ${safeStringify(preLoadedState)}`,
                    markup: markup
                });
                const html = ReactDomServer.renderToStaticMarkup(htmlElement);
                res.write(`<!doctype html>` + html);
                res.end();
            }).catch(error => {
                res.status(500).send(error.message);
            });
        } else {
            res.status(404).send('Not found')
        }
    });
}

application.listen(port, ()=> {
    console.log("Example application listening on port 3000!");
});