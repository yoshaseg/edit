import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux';

import header from './header';
import detail from './detail';
import nowDetailLoading from './nowDetailLoading';
import latestList from './latestList';

/**
 * reducerをまとめる
 */
const AppReducers = combineReducers({
    routing: routerReducer,
    header,
    detail,
    nowDetailLoading,
    latestList,
});

export default AppReducers
