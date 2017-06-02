import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './src/App';
import Home from './src/containers/Home';
import Foo from './src/containers/Foo';
import Bar from './src/containers/Bar';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="foo" component={Foo}/>
        <Route path="bar" component={Bar}/>
    </Route>
);