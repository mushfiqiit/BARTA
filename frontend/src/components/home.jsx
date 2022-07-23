import React, { Component } from 'react';
import axios from "axios";
import Status from './status';
import authService from '../services/authService';
import Story from './story';
import ReqWithHead from '../utils/reqWithHead';
import PostWithHead from '../utils/postWithHead';

class Home extends Component {
    state = { 
        status: []
    }
    
    async componentDidMount() {
        console.log(authService.getCurrentUser());
        const { data: status }=await ReqWithHead(
            "api/status", authService.getJwt()
        );
        
            //console.log(status);
            //console.log(authService.getJwt())
        
        this.setState({status});
    }

    handleSubmit =async(e) => {
        e.preventDefault();
    const content=e.target.content.value;
      
      const data={
          "content":content,
      }
      console.log(data);
      const response = await PostWithHead(
          "api/status", data, authService.getJwt()
      )
      };
    
    render() { 
        /* if(authService.getCurrentUser()) 
        return<h1>User here</h1>
        
        else */
        return (

            
            <React.Fragment>
                <Story />

          <div>
            <ul className='thought-list'>
                {this.state.status.map(post => 
                    <Status
                        key={post.id}
                        content={post.content}
                        username={post.user.username}
                        time={post.postedAt}
                    />)}
            </ul>
        </div>


            <div className='container-fluid m-5'>

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
    </div>
            </React.Fragment>
            
        );
    }
}
 
export default Home;