import React from "react";
import { dndApi, descriptionApi } from "./api";
import Description from "./Description";
import ListComponent from "./ListComponent";

import "./App.css";

const App = () => {
  const [toggle, setToggle] = React.useState(false);
  const [result, setResult] = React.useState([]);
  const [description, setDescription] = React.useState([]);
  const [category, setCategory] = React.useState("");
  const [error, setError] = React.useState(null);

  const handleClick = (categoryParam) => {
    dndApi(categoryParam).then((data) => {
      setResult(data.results);
    });
    setCategory(categoryParam);
  };

  const displayDescription = (option) => {
    descriptionApi(category, option.index).then((dataDescription) => {
      setDescription(dataDescription);
      console.log(dataDescription);
    });
    setToggle(!toggle);
  };

  const handleSwitch = () => {
    setToggle(!toggle);
  };

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div className="App">
      {toggle ? (
        <Description handleSwitch={handleSwitch} description={description} />
      ) : (
        <div className="list-container">
          <div className="buttons-container">
            <button className="btn-class" onClick={() => handleClick("classes")}>Classes</button>
            <button className="btn-class" onClick={() => handleClick("features")}>Features</button>
            <button className="btn-class" onClick={() => handleClick("monsters")}>Monsters</button>
            <button className="btn-class" onClick={() => handleClick("spells")}>Spells</button>
        </div>
        <ListComponent result={result} displayDescription={displayDescription} />
        </div>
      )}
    </div>
  );
};

export default App;
