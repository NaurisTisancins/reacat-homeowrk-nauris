import React from 'react';
import Quote from './quote';
import Image from './Image';

const Character = ({ character, image, quote }) => {
  
  return (
    <div className="character">
      <h1 className="charName">{character}</h1>
      <Image image={image} />
      <Quote quote={quote}/>
    </div>
  )

}

export default Character;