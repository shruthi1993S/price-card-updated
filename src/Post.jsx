import React from "react";
import "./post.css";
import { FaCheck, FaTimes } from 'react-icons/fa';

function Post({ plan }) {
  return (
    
      <div className="card ">
        <div style={{borderRadius:'10px'}}className="card-header">
          <h3>{plan.name}</h3>
        </div>
          <div className="card-body" >
             <h3>{plan.price}</h3>
                <ul>
                  {plan.features.map((feature, index) => (
                      <li key={index} className={feature.isEnabled ? 'enabled' : 'disabled'}>
                      {feature.isEnabled ? <FaCheck className="icon" /> : <FaTimes className="icon" />} {feature.name}
                     </li>
                   ))}
               </ul>
          <button className="oval-button btn btn-primary btn-block " type="button">
            BUTTON
          </button>
        </div>
      </div>
  
    
  );
}

export default Post;
