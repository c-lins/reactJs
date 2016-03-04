/**
 * Created by zhangqiang on 2016/2/23.
 */
export function add(count){
    return {type:"ADD",count:count}
}

export function minus(count){
    return {type:"MINUS",count:count}
}