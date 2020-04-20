import React from "react";

const Description = ({descriptionClick}) => {
  return(
    <div>
      <p>Description</p>
      <button onClick={descriptionClick}>switch</button>
    </div>
    
  )
}

export default Description;