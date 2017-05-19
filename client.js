import React from 'react';
import {render} from 'react-dom'
import {applyMiddleware, compose, createStore} from 'redux';
import Thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import App from './src/App';
import AppReducers from './src/reducers';

// 通常のStore定義
// const store = createStore(editorApp);

// ActionでAjax通信はする場合は以下のようにStoreを定義する
const createFinalStore = () => {
    const finalCreateStore = compose(
        applyMiddleware(Thunk),
    )(createStore);
    return finalCreateStore(AppReducers);
};

const store = createFinalStore();

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);