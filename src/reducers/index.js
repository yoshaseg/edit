import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux';

import test from './test';
import latestList from './latestList';

/**
 * reducerをまとめる
 */
const AppReducers = combineReducers({
    routing: routerReducer,
    test,
    latestList,
});

export default AppReducers
