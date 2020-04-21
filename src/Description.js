import React from "react";

const Description = ({ handleSwitch, description }) => {
    return (
      <div>
        <p>Description</p>
        <button onClick={handleSwitch}>switch</button>
        <h4>{description.name}</h4>
        <p>{description.desc}</p>
       </div>
    );
  
};

export default Description;
