/**
 * Created by zhangqiang on 2016/1/12.
 */
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';

export default function createTrafficStore(initstate){
    return createStore(rootReducer,initstate);
}