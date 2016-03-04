/**
 * Created by zhangqiang on 2016/2/22.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import jq from 'qwest'
class CommentBox extends React.Component{
    constructor(props) {
        super(props);
        this.state = {commentData:null}
    }
    //已插入真实 DOM 后调用
    componentDidMount() {
        this.listComments();
    };
    //获取评论列表
    listComments(){
        jq.post('http://127.0.0.1:8080/listComments', {cache: false})
            .then(function(xhr, response) {
                this.setState({commentData: response});
            }.bind(this))
            .catch(function(xhr, response, e) {
                alert(e);
            }.bind(this));
    }
    //提交评论内容
    _handleCommentSubmit(comment,this_){
        console.log(this);
        console.log(this_);
        jq.post('http://127.0.0.1:8080/addComment',{id:comment.id,name:comment.name,comment:comment.comment,headImg:comment.headImg})
            .then(function(xhr, response) {
                //console.log(this_);
                this_.listComments();
            }.bind(this))
            .catch(function(xhr, response, e) {
                alert(e);
            }.bind(this));
    }
    render() {
        /*var dataMap =  [
            {id:"10086",name: "阿猫", text: "拿快递拿快递3号小邮局爆仓啦",headImg:"http://tp2.sinaimg.cn/1751158793/50/5730718596/1"},
            {id:"10000",name: "阿狗", text: "长得帅是怎样的体验",headImg:"http://tp4.sinaimg.cn/3069348215/50/5721712236/1"},
            {id:"12306",name: "阿呆", text: "今年火车票很好买",headImg:"http://tp1.sinaimg.cn/2709577332/50/5734583466/0"},
            {id:"12315",name: "阿瓜", text: "天天315",headImg:"http://tp4.sinaimg.cn/2142168143/50/5743234065/0"},
        ];*/
        return <div className="commentBox">
                <CommentList data={this.state.commentData} />
                <CommentForm onCommentSubmit = {this._handleCommentSubmit} this_={this}/>
        </div>
    }
}
module .exports = CommentBox;