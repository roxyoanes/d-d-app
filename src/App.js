import React from 'react';
import {dndApi} from "./api";
import './App.css';

const App = () => {
  const [toggle, setToggle] = React.useState(false);
  const [result, setResult] = React.useState([]);
  const [error, setError] = React.useState(null);

  const handleClick = (a) => {
    dndApi(a).then((data) => {
      setResult(data.results)
      console.log(data.results);
    })
    setToggle(!toggle);
    console.log("clicked");
  }
 
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div className="App">
        <p>
          hello
        </p>
        <button onClick={() => handleClick("classes")}>classes</button>
        <button onClick={handleClick}>Features</button>
        <button onClick={handleClick}>Monsters</button>
        <button onClick={handleClick}>Specs</button>
    </div>
  );
}

export default App;
