import React, { Component } from 'react';
import axios from "axios";
import Status from './status';

class Home extends Component {
    state = { 
        status: []
    }
    
    async componentDidMount() {
        const { data: status }=await axios.get(
            "http://127.0.0.1:8000/api/status/"
        );
        this.setState({status});
    }
    
    render() { 
        return (
            <React.Fragment>
            
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
      <form>
        <div className='row'>

            
            <div className='col-6'>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a status here" id="floatingTextarea" style={{height: "100px"}} 
                    ></textarea>
                    <label htmlFor="floatingTextarea">Share your thoughts?</label>
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