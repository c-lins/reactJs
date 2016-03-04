/**
 * Created by zhangqiang on 2016/2/23.
 */
import { createStore} from 'redux';
import rootReducer from '../reducers/rootReducer';

export default function createCalculatorStore(){
    return createStore(rootReducer);
}