import React from "react";
import {CharaterCard, CharCardBox, ImageCard} from './styled';

const CharacterCard = props => {
  let {image, name, species, status, origin, location, episode, gender} = props.char
  return(
   <CharCardBox>
      <CharaterCard>
        <ImageCard src={image} alt={`character: ${name}`} className="img"/>
        <h2>Name: {name}</h2>
        <p>Species: {species} Status: {status}</p>
        <p>Gender: {gender} </p>
        
        
      </CharaterCard>
   </CharCardBox>
  )
 
}
export default CharacterCard