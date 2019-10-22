import React from "react";
import Auth from "../Utilities/Auth.js";
import { Redirect, Route } from "react-router-dom";

export default class PrivateRoute extends React.Component {
    render() {
        if(!Auth.isAuthenticated) {
            return(<Redirect to="/login" />)
        }
        return (<Route {...this.props}/>)
    }
}