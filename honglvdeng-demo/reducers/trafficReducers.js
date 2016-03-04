/**
 * Created by zhangqiang on 2016/1/12.
 */
import TrafficLightsAction  from "../actions/TrafficLightsAction";
import * as Constants from "../constants/constants";
// 定义初始化状态，初始化状态是常量
// 初始状态是红灯
const initState = {
    color:'green',
    time:7 // 持续时间7ms
}
export  function light(state = initState ,action){
    console.log("color:"+state.color);
    switch (action.type){
        case Constants.CHANGE_RED:
            return {color:'red',time:5};
        case Constants.CHANGE_GREEN:
            return {color:'green',time:7};
        case Constants.CHANGE_YELLOW:
            return {color:'yellow',time:3};
        default:
            return state;
    }
}
export  function count(state = initState ,action){
    let count = action.count;
    console.log("count:"+count);
    switch (action.type){
        case Constants.CHANGE_COUNT:{
            return Object.assign({}, state, {time: count-1});
        }
        case Constants.INIT_COUNT:
            return Object.assign({}, state, {time: count});
        default:
            return state;
    }
}