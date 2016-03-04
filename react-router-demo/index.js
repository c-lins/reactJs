/**
 * Created by zhangqiang on 2016/2/19.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute, Redirect,browserHistory } from 'react-router';
import App from './containers/App'
import Index from './components/Index'
import Users from './components/Users'
import UsersIndex from './components/UsersIndex'
import User from './components/User'
import About from './components/About'
ReactDOM.render (
    <Router  history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Index}/>
            <Route path="/about" component={About}/>
            <Route path="/users" component={Users}>
                <IndexRoute component={UsersIndex}/>
                <Route path=":id" component={User}/>
            </Route>
        </Route>
    </Router>,
    document.getElementById('root')
)





