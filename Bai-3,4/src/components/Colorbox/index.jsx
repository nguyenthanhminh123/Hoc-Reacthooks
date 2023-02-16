import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

ColorBox.propTypes = {

};

function getRandomColor() {
  const COLOR_LIST= ['deeppink', 'green', 'yeloow', 'black', 'blue'];
  const randomIdex = Math.trunc(Math.random() *5);
  return COLOR_LIST[randomIdex];
}

function ColorBox() {
  const [color, setColor] = useState('deeppink');

  function handleBoxClick(){
      // get random color --> set color
      const newmColor = getRandomColor();
      setColor(newColor);
  }
  return (
    <div
      className='color-box'
      style={{ backgroundColor: color }}
      onClick = {handleBoxClick}
    >
      COLOR BOX
    </div>
  );
}

export default ColorBox;