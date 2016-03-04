/**
 * Created by zhangqiang on 2016/2/22.
 */
import React from 'react';
import ReactDOM from 'react-dom';
export default class CommentItem extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="item">
            <div className="img">
                <a href={this.props.data.id}><img src={this.props.data.headImg} /></a>
            </div>
            <div className="comment">
                <b>{this.props.data.name}:</b>
                {this.props.data.comment}
            </div>
        </div>
    }
}