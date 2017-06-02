import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux';

import test from './test';
import testList from './testList';

/**
 * reducerをまとめる
 */
const AppReducers = combineReducers({
    routing: routerReducer,
    test,
    testList,
});

export default AppReducers
