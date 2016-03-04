/**
 * Created by zhangqiang on 2016/2/23.
 */
import { createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
)(createStore)
export default function createCalculatorStore(){
    return createStoreWithMiddleware(rootReducer);
}