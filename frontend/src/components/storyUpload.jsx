import React, { Component } from 'react';
import PostWithHead from '../utils/postWithHead';
import authService from '../services/authService';

class StoryUpload extends Component {
    state = { 
        selectedFile:null
     } 

    fileSelectedHandler=event=>{
        this.setState({
            selectedFile:event.target.files[0]
        })
    }

    fileUploadHandler=async()=>{
        const fd=new FormData();
        fd.append(
            'image', this.state.selectedFile, 
            this.state.selectedFile.name
            )
        const response=await PostWithHead(
            "api/story/", fd, authService.getJwt()
        )
    }

    render() {
        if(authService.getCurrentUser()) 
        return (
            <div className='App'>
                <input 
                type="file"
                onChange={this.fileSelectedHandler}
                />
                <button 
                onClick={this.fileUploadHandler}
                >Upload
                </button>
            </div>
            
        );
        else return null;
    }
}
 
export default StoryUpload;