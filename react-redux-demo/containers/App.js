/**
 * Created by zhangqiang on 2016/2/23.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as CalculatorAction from "../actions/CalculatorAction";

class App extends Component {
    constructor(){
        super();
    }
    _addClick(){
        this.props.actions.add(1);
    }
    _minusClick(){
        this.props.actions.minus(1);
    }
    render() {
        var recordList = this.props.record.map(function(record,index){
            return <li key={index}>{record.record}</li>;
        });
        return <div>
            my count : <b>{this.props.count}</b>
            <input type="button" onClick={this._addClick.bind(this)} value="+" />
            <input type="button" onClick={this._minusClick.bind(this)} value="-" />
            <br/>
            my record :
            <ul>
                {recordList}
            </ul>
        </div>
    }
}

// 声明 connect 连接
// 将 redux 中的 state传给 App
function mapStateToProps(state) {
    //console.log(state);
    return {
        count:state.cal.count,
        record:state.storeRecord.record
    }
}

function mapDispatchToProps(dispatch) {
    //console.log("dispatch::"+dispatch);
    return {
        actions:bindActionCreators(CalculatorAction, dispatch)
    }
}


// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(mapStateToProps, mapDispatchToProps)(App)
