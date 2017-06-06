import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux';

import detail from './detail';
import nowDetailLoading from './nowDetailLoading';
import latestList from './latestList';

/**
 * reducerをまとめる
 */
const AppReducers = combineReducers({
    routing: routerReducer,
    detail,
    nowDetailLoading,
    latestList,
});

export default AppReducers
