import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './src/reducers';

// 通常のStore定義
// const store = createStore(editorApp);

// ActionでAjax通信はする場合は以下のようにStoreを定義する
/*const createFinalStore = () => {
 const finalCreateStore = compose(
 applyMiddleware(Thunk)
 )(createStore);
 return finalCreateStore(AppReducers);
 };*/


export default function configureStore() {
    const finalCreateStore = compose(
        applyMiddleware(thunkMiddleware)
    )(createStore);

    return finalCreateStore(rootReducer);

}