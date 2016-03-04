/**
 * Created by zhangqiang on 2016/2/23.
 */
import React from 'react';
import ReactDOM from 'react-dom'
export default class User extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h3>用户: {this.props.params.id}</h3>
                <h3>参数： {this.props.location.search}</h3>
            </div>
        )
    }
}
