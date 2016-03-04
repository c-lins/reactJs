/**
 * Created by zhangqiang on 2016/2/23.
 */
import axios from 'axios'
//获取评论列表
export function listComments(){
    return dispatch => {
        return axios.post('http://127.0.0.1:8080/listComments')
            .then(function (response) {
                console.log(response.data);
                dispatch({type:"LIST_COMMENTS",commentData:response.data});
            })
            .catch(function (err) {
                dispatch({type:"LIST_COMMENTS",commentData:[]});
            })
    }
}
//添加回复
export function addComment(comment,history){
    if(true)
        history.push('/login');
    return dispatch => {
        return axios.post('http://127.0.0.1:8080/addComment2',comment)
            .then(function (response) {
                console.log(response.data);
                if(response.data.result == 1){
                    dispatch(listComments());//重新请求评论列表
                    dispatch(listCommentsScore());//重新请求评论排行
                }
                else
                    alert("回复失败!");
            })
            .catch(function (err) {
                alert("回复异常!");
            })
    }
}

//显示评论排行
export function listCommentsScore(){
    return dispatch => {
        return axios.post('http://127.0.0.1:8080/listScoreComments')
            .then(function (response) {
                console.log(response.data);
                dispatch(receivePosts(response.data));
            })
            .catch(function (err) {
                dispatch(receivePosts([]));
            })
    }
}

function receivePosts(data) {
    return {
        type: "LIST_COMMENTS_SCORE",
        commentScore: data
    }
}
