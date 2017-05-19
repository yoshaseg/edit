import express from 'express';
import React from 'react';
import ReactDomServer from 'react-dom/server';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import Thunk from 'redux-thunk';
import Html from './src/Html';
import AppReducers from './src/reducers';

const app = express();
const port = 3000;

app.use('/public', express.static('build'));

app.get('*', handleRender);

function handleRender(req, res) {

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

    const html = ReactDomServer.renderToString(
        <Provider store={store}>
            <Html/>
        </Provider>
    );

    const preLoadedState = store.getState();

    res.send(renderFullPage(html, preLoadedState))
}

function renderFullPage(html, preLoadedState) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preLoadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/public/main.min.js"></script>
      </body>
    </html>
    `
}

app.listen(port, ()=> {
    console.log("Example app listening on port 3000!");
});