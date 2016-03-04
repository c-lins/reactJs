/**
 * Created by zhangqiang on 2016/2/19.
 */
import React from 'react';
import ReactDOM from 'react-dom';

class NewDom extends React.Component{
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }
    componentWillMount() {//已插入真实 DOM 前调用
        console.info("this is componentWillMount..");
    };
    componentDidMount() {//已插入真实 DOM 后调用
        console.info("this is componentDidMount..");
    };

    componentWillUpdate(nextProps,nextState){//重新渲染组件前调用
        //console.info(nextProps);
        //console.info(nextState);
        console.info("this is componentWillUpdate..");
    }

    componentDidUpdate(nextProps,nextState){//重新渲染组件后调用
        console.info("this is componentDidUpdate..");
    }
    componentWillUnmount(){
        console.info("this is componentWillUnmount..");
    }

    shouldComponentUpdate(nextProps,nextState){//组件判断是否重新渲染时调用
        console.info("this is shouldComponentUpdate..");
        return true;
    }

    Unmounting(){
        console.info("this is Unmounting..");
    }
    _addClick(){
        this.setState({count:this.state.count+1});
    }
    _minusClick(){
        this.setState({count:this.state.count-1});
    }

    render() {
        return <div>
            my count : <b>{this.state.count}</b>
            <input type="button"  ref="myText" onClick={this._addClick.bind(this)} value="+" />
            <input type="button" onClick={this._minusClick.bind(this)} value="-" />
        </div>
    }
}
ReactDOM.render (
    <NewDom/>,
    document.getElementById('root')
)

