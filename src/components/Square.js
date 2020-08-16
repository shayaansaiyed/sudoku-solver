import React from 'react';
import './../App.css';

function Square(props) {
  let handleChange = (event) => {
    props.handleChange(props.row, props.col, event.target.value);
  }

  return (
    <input type="text" maxlength = "1" className="square" value={props.value} 
    onChange = {handleChange}
    >
    </input>
  );
}

export default Square;
