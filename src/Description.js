import React from "react";

const Description = ({handleSwitch, description}) => {
  return(
    <div>
      <p>Description</p>
      <button onClick={handleSwitch}>switch</button>
    </div>

    
  )
}

export default Description;