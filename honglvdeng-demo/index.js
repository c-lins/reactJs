/**
 * Created by zhangqiang on 2016/1/11.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import trafficStore from './store/trafficStore';
import App from './containers/APP';
let store = trafficStore();
console.log(store)
/*let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);*/
let rootElement = document.getElementById('root');
ReactDOM.render (
    <Provider store={store}>
        <App  />
    </Provider>,
    rootElement
);