/**
 * Created by zhangqiang on 2016/1/12.
 */
import * as Constants from "../constants/constants";

export function changeRed(){
    return {type:Constants.CHANGE_RED}
}

export function changeGreen(){
    return {type:Constants.CHANGE_GREEN}
}

export function changeYellow(){
    return {type:Constants.CHANGE_YELLOW}
}
export function changeCount(count){
    return {type:Constants.CHANGE_COUNT,count}
}
export function initCount(count){
    return {type:Constants.INIT_COUNT,count}
}