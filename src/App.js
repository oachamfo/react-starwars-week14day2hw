//imports
import { useState, useEffect } from "react";
import "./App.css";
import StarshipCard from "./components/StarshipCard"; //default import of StarshipCard()
import { getAllStarships } from "./services/sw-api"; //using a named import (with the curly braces) for getAllStarships() function

function App() {
  //state to hold starships data
  const [starships, setStarships] = useState([]);

  //This will run on the first render but not on subsquent renders due to the empty array passed as a second parameter
  useEffect(() => {
    //async function inside useEffect() is used to call an imported async function and to update the state
    const getShipsandUpdateState = async () => {
      const ships = await getAllStarships();
      //set the starships state with the return value of the imported getAllStarships() function
      setStarships(ships);
    };
    //inside useEffect() invoke the async function defined in useEffect()
    getShipsandUpdateState();
  }, []);

  return (
    <div className="App">
      <div className="app-component-header">React Star Wars</div>
      {/*parent div to serve as a container for starship flash cards. flash card elements should all be contained in a parent div*/}
      <div className="starship-cards">
        {/*map over array of starships. map() requires a return statement to return something since it is a function*/}
        {/*optional chaining is required if not, an undefined error will occur if starships state is NOT initialized, meaning in this case no data type, including an empty array was assigned to it when it was declared*/}
        {starships?.map((starship, i) => {
          return <StarshipCard key={i} starship={starship} />;
        })}
      </div>
    </div>
  );
}

export default App;
