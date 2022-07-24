import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import authService from '../services/authService';

class Login extends Component {
    state = {  } 

    handleSubmit =async(e) => {
        e.preventDefault();
    const username=e.target.username.value;
      const password=e.target.password.value;
      const data={
          "username":username,
          "password":password,
      }
      
      //console.log(data);
      const response = await authService.login(data);
      console.log(response);
      alert(username+" logged in.");
      };

    render() {
        if (authService.getCurrentUser()) return <Redirect to="/" />;
        return (
            <div>
            <h1 align="center">Login</h1>
            <form onSubmit={this.handleSubmit} align="center">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="text" className="form-control" />
                </div>
                <button className="btn btn-primary">Login</button>
            </form>
        </div>
        );
    }
}
 
export default Login;