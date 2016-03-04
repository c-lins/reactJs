/**
 * Created by zhangqiang on 2016/2/23.
 */
import React from 'react';
import ReactDOM from 'react-dom'
export default  class Users extends React.Component {
    render() {
        return (
            <div>
                <h2>Users</h2>
                {this.props.children}
            </div>
        )
    }
}