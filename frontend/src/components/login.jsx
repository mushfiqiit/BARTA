import React, { Component } from 'react';

class Login extends Component {
    state = {  } 
    render() { 
        return (
            <div>
            <h1 align="center">Register</h1>
            <form onSubmit={this.handleSubmit} align="center">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="text" className="form-control" />
                </div>
                <button className="btn btn-primary">Register</button>
            </form>
        </div>
        );
    }
}
 
export default Login;