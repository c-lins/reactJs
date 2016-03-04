/**
 * Created by zhangqiang on 2016/1/12.
 */
import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
    render() {
        let time = this.props.time;
        return (
            <div className="count">
                <h2>{time}</h2>
            </div>
        )
    };
}
Counter.propTypes = {
    time: PropTypes.number.isRequired
}

Counter.defaultProps = {
    time : 7
}
