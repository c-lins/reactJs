/**
 * Created by zhangqiang on 2016/2/22.
 */
import React from 'react';
import ReactDOM from 'react-dom';
export default class CommentForm extends React.Component{
    constructor(props) {
        super(props);
    }
    _handleSubmit(e){
        //阻止表单提交
        e.preventDefault();
        var comment = this.refs.comment.value.trim();
        var id = 1234,name="老王",headImg="http://tp1.sinaimg.cn/2709577332/50/5734583466/0";

        if(comment == "")
            alert("请输入评论内容！");
        else{
            this.props.onCommentSubmit({id:id,name:name,comment:comment,headImg:headImg});
            this.refs.comment.value = '';
        }
    }
    render() {
        return <div className="form">
            <form  onSubmit={this._handleSubmit.bind(this)}>
                <textarea rows="3" cols="50" ref="comment"></textarea>
                <input type="submit" value="提交"/>
            </form>
        </div>
    }
}