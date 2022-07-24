import React, { Component } from 'react';
import ReqWithHead from '../utils/reqWithHead';
import PostWithHead from '../utils/postWithHead';
import authService from '../services/authService';


class StatusPost extends Component {
    state = {  }
    handleSubmit =async(e) => {
        e.preventDefault();
    const content=e.target.content.value;
      
      const data={
          "content":content,
      }
      console.log(data);
      const response = await PostWithHead(
          "api/status/", data, authService.getJwt()
      )
      }; 
    render() { 
        if(authService.getCurrentUser())
        return (
            <form 
      onSubmit={this.handleSubmit}
      >
        <div className='row'>
            <div className='col-6'>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a status here" id="content" style={{height: "100px"}} 
                    ></textarea>
                    <label htmlFor="content">Share your thoughts?</label>
                </div>
            </div>
            <div className='col-2'>
            <button className='btn my-5' type='submit'>Post</button>
            </div>
        </div>
      </form>
        );
        else return null
    }
}
 
export default StatusPost;