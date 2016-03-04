/**
 * Created by zhangqiang on 2016/2/23.
 */
//初始化状态  count：计数器  record ：操作记录，是个数组
const initState = {
    count:0,
    record:[]
}
//处理计算
export function cal(state = initState,action){
    console.log(state);
    switch(action.type){
        case 'ADD'://加运算  更新state中的count
            return Object.assign({}, state, {count:state.count+action.count});
        case 'MINUS':
            return Object.assign({}, state, {count:state.count-action.count});
        default:
            return state;
    }
}

//记录用户操作
export function storeRecord(state = initState,action){
    console.log(state);
    switch(action.type){
        case 'ADD':
            return Object.assign({}, state, {record:[...state.record,{record:(new Date())+'  :+'+action.count}]});
        case 'MINUS':
            return Object.assign({}, state, {record:[...state.record,{record:(new Date())+'  :-'+action.count}]});
        default:
            return state;
    }
}