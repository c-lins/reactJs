/**
 * Created by zhangqiang on 2016/2/22.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import CommentItem from './CommentItem'
export default class CommentList extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        var commentItems = "";
        if(this.props.data){
            commentItems = this.props.data.map(function (data,index){
                return (
                    <CommentItem key={index} data={data}/>
                );

            })
        }
        return (
            <div>
                {commentItems}
            </div>
        );
    }
}