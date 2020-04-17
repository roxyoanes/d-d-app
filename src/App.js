import React from 'react';
import './App.css';

const App = () => {
  const [toggle, setToggle] = React.useState(false);

  const handleClick = () => {
    setToggle(!toggle);
    console.log("clicked");
  }
 
  return (
    <div className="App">
        <p>
          hello
        </p>
        <button onClick={handleClick}>Classes</button>
        <button onClick={handleClick}>Features</button>
        <button onClick={handleClick}>Monsters</button>
        <button onClick={handleClick}>Specs</button>
    </div>
  );
}

export default App;
