/**
 * Created by zhangqiang on 2016/2/19.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import commentStore from './store/commentStore';
import CommentBox from './components/CommentBox';
import { connect } from 'react-redux';

//创建store
let store = commentStore();
console.log(store)

//store中的数据发生改变是触发回调
store.subscribe(() =>
    console.log(store.getState())
);
let rootElement = document.getElementById('root');
ReactDOM.render (
    <Provider store={store}>
        <CommentBox  />
    </Provider>,
    rootElement
);
