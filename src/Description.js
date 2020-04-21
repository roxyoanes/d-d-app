import React from "react";

const Description = ({ handleSwitch, description }) => {
    return (
      <div className="description-container">
        <h4 className="description-title">{description.name}</h4>
        <p className="description">{description.desc}</p>
        <button className="toggle-btn" onClick={handleSwitch}>Switch</button>
       </div>
    );
  
};

export default Description;
