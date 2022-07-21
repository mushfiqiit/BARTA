import React from 'react';


const Status = props => {
  return (
      <React.Fragment>
          <h1>{props.username}</h1>
      <div className="card">
  <div className="card-body">
    
    <p className="card-text">{props.time}</p>
    <h5 className="card-title">{props.content}</h5>
  </div>
</div>
      </React.Fragment>
      
  )
}

export default Status;