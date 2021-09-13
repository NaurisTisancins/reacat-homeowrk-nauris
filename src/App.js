import React, { useState, useEffect } from "react";
import Axios from "axios";

import Character from './components/character';

const App = () => {
  //the api data is stored here
  const [data, setData] = useState(null);

  //get the api data
  useEffect(() => {
    const fetchData = async () => {
      const response = await Axios.get(
        "https://thesimpsonsquoteapi.glitch.me/quotes?count=50"
      );
      //store the api data#
      setData(response.data);
    }
    fetchData();
  }, []);

  //check the api data exists

  const removeChar = (index) => {
    const characters = [...data];
    let filteredChars = characters.filter((character,idx)=> {
      return idx !== index;
    });
    setData(filteredChars);
  }
  
  return (
    <main className="container">
      {data === null ? <h1>Loading...</h1> : data.map((character, index) => {
        return (
          <>
            <Character
              key={index}
              character={character.character}
              image={character.image}
              quote={character.quote} />
            <button
              onClick={() => removeChar(index)}>
              delete
            </button>
          </>
        )
      })}

    </main>
  );
};

export default App;
