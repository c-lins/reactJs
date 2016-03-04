/**
 * Created by zhangqiang on 2016/2/22.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import CommentScoreItem from './CommentScoreItem'
export default class CommentScoreList extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        var commentScoreItem = "";
        //console.log("===commentScoreItem==")
       // console.log(this.props.data)
        if(this.props.data){
            commentScoreItem = this.props.data.map(function (data,index){
                console.log(data)
                return (
                    <CommentScoreItem key={index} data={data}/>
                );

            })
        }
        return (
            <div className="commentScore">
                <b>评论排行</b>
                {commentScoreItem}
            </div>
        );
    }
}