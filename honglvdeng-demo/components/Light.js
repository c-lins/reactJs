/**
 * Created by zhangqiang on 2016/1/12.
 */
/**
 * Created by zhangqiang on 2016/1/11.
 */
import React, { Component, PropTypes } from 'react';

export default class Light extends Component {
    render() {
        let color = this.props.color;
        return (
            <div className="line">
                <h1><p className={color == 'green' ? 'green':'black'}>●</p></h1>
                <h1><p className={color == 'yellow' ? 'yellow':'black'}>●</p></h1>
                <h1><p className={color == 'red' ? 'red':'black'}>●</p></h1>
            </div>
        )
    };
}
Light.propTypes = {
    color: PropTypes.string.isRequired
}

Light.defaultProps = {
    color : 'green'
}
