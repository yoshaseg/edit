import express from 'express';
import React from 'react';
import ReactDomServer from 'react-dom/server';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import Thunk from 'redux-thunk';
import {match, RouterContext} from 'react-router'
import Helmet from 'react-helmet';

import routes from './routes';
import AppReducers from './src/reducers';
import HtmlComponent from './src/Html';

const application = express();
const port = 3000;

application.use('/public', express.static('build'));

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

            // 通常のStore定義
            // const store = createStore(editorApp);

            // ActionでAjax通信はする場合は以下のようにStoreを定義する
            const createFinalStore = () => {
                const finalCreateStore = compose(
                    applyMiddleware(Thunk)
                )(createStore);
                return finalCreateStore(AppReducers);
            };
            const store = createFinalStore();

            const components = renderProps.components.filter(component => component.fetchData);

            Promise.all(components.map(component => {
                store.dispatch(component.fetchData());
            })).then(() => {
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