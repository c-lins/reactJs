/**
 * Created by zhangqiang on 2016/2/22.
 */
import React from 'react';
import ReactDOM from 'react-dom';
export default class CommentScoreItem extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="item">
                <a href={this.props.data.id}><img src={this.props.data.headImg} /></a>
                <b>{this.props.data.name}:({this.props.data.count})</b>
        </div>
    }
}