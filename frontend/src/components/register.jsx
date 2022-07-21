import React, { Component } from 'react';
import userService from '../services/userService';

class Register extends Component {
    state = {
        data: { username: "", password: "" },
        errors: {}
      };

    handleSubmit =async(e) => {
        e.preventDefault();
    const username=e.target.username.value;
      const password=e.target.password.value;
      const data={
          "username":username,
          "password":password,
      }
      console.log(data);
      const response = await userService.register(data);
      };
    
    

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
 
export default Register;