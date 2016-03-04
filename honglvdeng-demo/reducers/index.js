/**
 * Created by zhangqiang on 2016/1/12.
 */
import { combineReducers } from 'redux';
import  { light, count } from "./trafficReducers";
const rootReducer = combineReducers({
    light,count
});
export default rootReducer;