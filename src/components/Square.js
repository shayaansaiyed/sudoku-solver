import React from 'react';
import './../App.css';

function Square(props) {
  return (
    <input type="text" maxlength = "1" className="square" value={props.value}>
    </input>
  );
}

export default Square;
