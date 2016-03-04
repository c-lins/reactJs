/**
 * Created by zhangqiang on 2016/1/12.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Light from "../components/Light";
import Counter from "../components/Counter";
import * as TrafficLightsAction from "../actions/TrafficLightsAction";

class App extends Component {
    constructor(){
        super();
    }
    changeCount(){
        const { count,actions } = this.props;
        let ct = count.time;
        actions.changeCount(ct);
        if(ct == 1){
            this.changeLight();
            actions.initCount(this.props.light.time);
        }
        let _self = this;
        setTimeout(function(){_self.changeCount();},1000);
    };
    changeLight(){
        const { light, actions } = this.props;
        //alert(light.color);
        switch(light.color){
            case 'red':
                actions.changeGreen();
                break;
            case 'green':
                actions.changeYellow();
                break;
            case 'yellow':
                actions.changeRed();
                break;
            default:
                actions.changeRed();
        }
    };
    handleClick(e){
        this.changeCount();
    };
    render() {
        // 通过connect 注入 redux 的 dispatch 方法
        const { light,count } = this.props;
        //setInterval(this.changeCount(count,actions), 1000);
        return (
            <div >
                <Light color ={light.color} />
                <div onClick={this.handleClick.bind(this)}><Counter time = {count.time} /></div>
            </div>
        )
    }
}


// 声明 connect 连接
// 将 redux 中的 state传给 App
function mapStateToProps(state) {
    //console.log(state);
    return {
        light: state.light,count:state.count
    }
}

function mapDispatchToProps(dispatch) {
    //console.log("dispatch::"+dispatch);
    return {
        actions:bindActionCreators(TrafficLightsAction, dispatch)
    }
}


// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(mapStateToProps, mapDispatchToProps)(App)
