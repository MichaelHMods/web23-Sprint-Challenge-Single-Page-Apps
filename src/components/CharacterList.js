import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard';


export default function CharacterList() {
  const [char, setChar] = useState([]);
  console.log("this is char", char);

  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios 
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        console.log('res.data.results', res.data.results
        )
        setChar(res.data.results)
      })
      .catch(err => {
        console.log("you flew too close to the sun", err)
      })

      if (!char) {
        return <div class='Loading...'>
          <h1>Loading,hold your horses</h1>
        </div>
      }
  }, []);

  return (
    
    <section className="character-list">
      <h2>cast</h2>
      <div>
      {char.map((char, i) => <CharacterCard char={char} key={i} /> )}
      </div>
     />
    

    </section>
  );
}
