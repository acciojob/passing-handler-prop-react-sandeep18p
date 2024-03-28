// ColourSelector.js
import React from 'react';
import '../styles/App.css';

const ColourSelector = ({ config, applyColor }) => {
  const { background, label, key } = config;

  return (
    <button className={`button btn-${key}`} onClick={() => applyColor(background)}>
      {label}
    </button>
  )
}

export default ColourSelector;
