import React, { Component } from 'react';
import authService from '../services/authService';
import ReqWithHead from '../utils/reqWithHead';
import { tokenUrl } from '../constants/constants';
const minioUrl="http://127.0.0.1:5002";

class Story extends Component {
    state = { 
        stories: []
     } 
     async componentDidMount() {
        console.log(authService.getCurrentUser());
        const { data: stories}=await ReqWithHead(
            "api/story", authService.getJwt()
        );
        
            console.log(stories);
            console.log(authService.getJwt())
        
        this.setState({stories});
    }

    render() { 
        const { stories }=this.state;
        return (
            <div class="container mt-4">
            <div class="card-group">
                <div class="row">
                {stories.map(story=>(<div class="card col-md-2 pt-4">
                        <p>{story.username}</p>
                        <img class="card-img-top" src=
        {minioUrl+story.image} />
                    </div>))}
    
                    
                </div>
            </div>
        </div>
        );
    }
}
 
export default Story;