//https://github.com/surreptus/example-testing/blob/master/src/components/button/index.js
import React from 'react';

export default ({onClick, label}) => (
  <button onClick={onClick}>
    {label}
  </button>
);