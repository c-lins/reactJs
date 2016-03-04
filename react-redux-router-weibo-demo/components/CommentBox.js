/**
 * Created by zhangqiang on 2016/2/22.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as CommentActin from '../actions/CommentActin'
import CommonScoreList from './CommonScoreList'
export default class CommentBox extends React.Component{
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
        this.props.actions.listComments();
        this.props.actions.listCommentsScore();
    }
    render() {
        console.log("history")
        console.log(this.context.history)
        return <div className="commentBox">
                <CommentList data={this.props.commentList} />
                <CommonScoreList data={this.props.CommentsScoreList}/>
                <CommentForm onCommentSubmit = {(comment)=>this.props.actions.addComment(comment,this.context.history)}/>
        </div>
    }
}

// 声明 connect 连接
// 将 redux 中的 state传给 App
function mapStateToProps(state) {
    //console.log(state);
    return {
        commentList:state.commentList,
        CommentsScoreList:state.CommentsScoreList
    }
}

function mapDispatchToProps(dispatch) {
    //console.log("dispatch::"+dispatch);
    return {
        actions:bindActionCreators(CommentActin, dispatch)
    }
}


// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(mapStateToProps, mapDispatchToProps)(CommentBox)

CommentBox.contextTypes = {
    history: React.PropTypes.object
}