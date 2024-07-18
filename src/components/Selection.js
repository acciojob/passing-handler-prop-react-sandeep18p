import React, { useState } from "react";
import "../styles/Selection.css";
import '../styles/App.css';

const Selection = (props) => {
  const [selectionStyle, updateSelectionStyle] = useState({});
  const updateSelectionStylee = (op) => {
    updateSelectionStyle(op);
  }

  return (
    <div className="hero">
      <div
        className="fix-box"
        style={selectionStyle}
        onClick={() => {
          props.applyColor(updateSelectionStylee);
        }}
      >
        <h2 className="subheading">Selection</h2>
      </div>
    </div>
  );
}

export default Selection;
