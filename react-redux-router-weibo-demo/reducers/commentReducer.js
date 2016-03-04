/**
 * Created by zhangqiang on 2016/2/23.
 */
//显示评论列表页
export function listComments(state=[], action) {
    switch (action.type) {
        case 'LIST_COMMENTS':
            return action.commentData;
        default:
            return state;
    }
}

//显示评论排行
export function listCommentsScore(state=null, action) {
    //console.log(state);
    switch (action.type) {
        case 'LIST_COMMENTS_SCORE':
            return action.commentScore;
        default:
            return state;
    }
}
