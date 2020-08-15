import React from 'react';
import Square from './Square'
import './../App.css';

function generateRow(){
    var row = []
    for (let i = 0; i < 9; i++){
        row.push(<Square />);
    }
    return row;
}

function generateGrid(){
    var grid = [];
    for (let i = 0; i < 9; i++){
        var row = generateRow()
        grid.push(<li>{row}</li>);
    }
    return grid;
}

function Board() {
  let grid = generateGrid();  

  return (
    <div className="board">
        <ul>{grid}</ul>
    </div>
  );
}

export default Board;
