/**
 * Created by zhangqiang on 2016/2/19.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import calculatorStore from './store/calculatorStore';
import App from './containers/APP';

//创建store
let store = calculatorStore();
console.log(store)

//store中的数据发生改变是触发回调
store.subscribe(() =>
    console.log(store.getState())
);
let rootElement = document.getElementById('root');
ReactDOM.render (
    <Provider store={store}>
        <App  />
    </Provider>,
    rootElement
);
