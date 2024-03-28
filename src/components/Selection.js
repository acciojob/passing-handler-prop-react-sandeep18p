// Selection.js
import React, { useState } from 'react';
import '../styles/Child.css';

const Selection = ({ selectedColor }) => {
  const [backgroundColor, setBackgroundColor] = useState('#3c415e');

  const updateSelectionStyle = () => {
    setBackgroundColor(selectedColor);
  };

  return (
    <div
      className="fix-box"
      style={{ backgroundColor }}
      onClick={updateSelectionStyle}
    >
      <h1 className='subheading'>Selection</h1>
    </div>
  );
};

export default Selection;
