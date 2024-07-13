import React from "react";
import "./Post.css";
function Post(props) {
  return (
    
      <div className="card ">
        <div style={{borderRadius:'10px'}}className="card-header">
          <h3>{props.name}</h3>
        </div>
        <div className="card-body" >
          <h2>{props.head}</h2>
          <p >{props.p1}</p>
          <p>{props.p2}</p>
          <p>{props.p3}</p>
          <p>{props.p4}</p>
          <p>{props.p5}</p>
          <p>{props.p6}</p>
          <p>{props.p7}</p>
          <p>{props.p8}</p>
          <button className="oval-button btn btn-primary btn-block " type="button">
            BUTTON
          </button>
        </div>
      </div>
  
    
  );
}

export default Post;
