import "./LoginPage.css";
import React from "react";
import { Component } from "react";
import Auth from "../../Utilities/Auth.js";

export default class LoginPage extends Component {

    constructor () {
        super();
        this.state={
            email: "",
            password: "",
            showError: false,
            errMsg: ""
        }
    }

    handleLogin = (e) => {
        e.preventDefault();
        this.setState({
            showError: false,
            errMsg: ""
        });
        Auth.login(this.state.email, this.state.password).then(res => {
            this.props.history.push("/");
        }).catch(res => {
            this.setState({
                showError: true,
                errMsg: res
            })
        });
    }

    handleForgot = (e) => {
        e.preventDefault();
        console.log("Forgot")
    }

    render() {
        return (
            <div className="container login-container">
                <div className="row justify-content-center">
                    <form className="col-lg-7 shadow-lg p-3">
                        <h2 className="text-center p-4">Document Verification App</h2>
                        {this.state.showError && <div className="alert alert-danger">{this.state.errMsg}</div>}
                        <div className="form-group">
                            <label htmlFor="email">Email ID</label>
                            <input 
                                value={this.state.email} 
                                className="form-control" 
                                type="email" 
                                id="email" 
                                placeholder="Enter Email ID"
                                onChange={(e) => this.setState({email: e.target.value})} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input 
                                value={this.state.password} 
                                className="form-control" 
                                type="password" 
                                id="password" placeholder="Enter Password"
                                onChange={(e) => this.setState({password: e.target.value})} />
                        </div>
                        <button
                            id="login"
                            className="btn btn-primary"
                            onClick={this.handleLogin.bind(this)}>
                                Login
                        </button>
                        <a 
                            href="#"
                            onClick={this.handleForgot.bind(this)}
                            className="form-text">Forgot Password?</a>
                    </form>
                </div>
            </div>
        );
    }
}