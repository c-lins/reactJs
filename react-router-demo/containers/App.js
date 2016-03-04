/**
 * Created by zhangqiang on 2016/2/22.
 */
import React from 'react';
import ReactDOM from 'react-dom'
import {Router, Route, Link, IndexRoute, Redirect,IndexLink } from 'react-router'
const ACTIVE = { color: 'red' }
export default class App extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            <h1>APP!</h1>
            <ul>
                <li><Link      to="/"           activeStyle={ACTIVE}>/</Link></li>
                <li><IndexLink to="/"           activeStyle={ACTIVE}>/IndexLink</IndexLink></li>

                <li><Link      to="/users"      activeStyle={ACTIVE}>/users</Link></li>
                <li><IndexLink to="/users"      activeStyle={ACTIVE}>/users IndexLink</IndexLink></li>

                <li><Link      to="/users/张三" activeStyle={ACTIVE}>/users/张三</Link></li>
                <li><Link      to="/users/张三" query={{foo:'bar'}} activeStyle={ACTIVE}>/users/张三?foo=bar</Link></li>

                <li><Link      to="/about"      activeStyle={ACTIVE}>/about</Link></li>
            </ul>

            {this.props.children}
        </div>
    }
}
