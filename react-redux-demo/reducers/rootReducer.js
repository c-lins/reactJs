/**
 * Created by zhangqiang on 2016/2/23.
 */
import { combineReducers } from 'redux';
import  { cal , storeRecord} from "./calculatorReducer";
const rootReducer = combineReducers({
    cal,storeRecord
});
export default rootReducer;