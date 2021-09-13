import React from 'react';

const Image = ({ image }) => {
  console.log(image)
  return (
    <img src={image} alt="hello" />
  )
}

export default Image;