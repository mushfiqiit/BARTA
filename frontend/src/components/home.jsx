import React, { Component } from 'react';
import axios from "axios";
import Status from './status';
import authService from '../services/authService';
import Story from './story';
import ReqWithHead from '../utils/reqWithHead';
import PostWithHead from '../utils/postWithHead';
import StoryUpload from './storyUpload';
import StatusPost from './statusPost';

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
          "api/status/", data, authService.getJwt()
      )
      };
    
    render() { 
        /* if(authService.getCurrentUser()) 
        return<h1>User here</h1>
        
        else */
        return (

            
            <React.Fragment>
                <Story />
            
            <StoryUpload />

            <br></br>
            <br></br>
            <br></br>
        <h1>Status</h1>
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
                
                <StatusPost />
      
    </div>
            </React.Fragment>
            
        );
    }
}
 
export default Home;