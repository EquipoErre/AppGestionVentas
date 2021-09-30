import React from "react";
import Login from 'components/login/Login.component';


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'styles/login.page.css';

function LoginPage(props) {
    return (
        <div className="outer">
        <div className="inner">
        <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/login" component={Login} />

        </Switch>
        </div>
        </div>
    );
}

export default LoginPage;