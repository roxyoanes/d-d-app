import React from "react";
import { dndApi, descriptionApi } from "./api";
import Description from "./Description";

import "./App.css";

const App = () => {
  const [toggle, setToggle] = React.useState(false);
  const [result, setResult] = React.useState([]);
  const [description, setDescription] = React.useState(null);
  const [category, setCategory] = React.useState("");
  const [error, setError] = React.useState(null);

  const handleClick = (categoryParam) => {
    dndApi(categoryParam).then((data) => {
      setResult(data.results);
    });
    setCategory(categoryParam)
    console.log("clicked");
  };

  const displayDescription = (option) => {
    descriptionApi(category, option.index).then((dataDescription) => {
      setDescription(dataDescription);
      console.log(dataDescription);
    });
    setToggle(!toggle);
  }

  const handleSwitch = () => {
    setToggle(!toggle);

  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div className="App">
      {toggle ? (
        <Description handleSwitch={handleSwitch} description={description} />
      ) : (
        <div>
          <p>hello</p>
          <button onClick={() => handleClick("classes")}>classes</button>
          <button onClick={() => handleClick("features")}>Features</button>
          <button onClick={() => handleClick("monsters")}>Monsters</button>
          <button onClick={() => handleClick("spells")}>Spells</button>
          <div>
            {result.map((el, i) => (
              <div key={el.index + i} className="categories-container">
                <button onClick={() => displayDescription(el)}>{el.name}</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
