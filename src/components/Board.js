import React, {useState} from 'react';
import Square from './Square'
import './../App.css';
import {main} from './../sudokuSolver';

function Board(props) {
  let initGrid = new Array(9);
  for (var i = 0; i < 9; i++){
    initGrid[i] = new Array(9);
  }

  let [grid, setGrid] = useState(initGrid)
  
  let generateRow = (array, rowNum) => {
    var row = []
    for (let i = 0; i < 9; i++){
        if (array[i] !== 0){
            row.push(<Square value={array[i]} row={rowNum} col={i} handleChange={handleValueChange}/>);
        } else {
            row.push(<Square value=' ' row={rowNum} col={i} handleChange={handleValueChange}/>);
        }
    }
    return row;
  }

  let generateGrid = (input2DArr) => {
    var tempgrid = [];
    for (let i = 0; i < 9; i++){
        var row = generateRow(input2DArr[i], i)
        tempgrid.push(<li>{row}</li>);
    }
    return tempgrid;
  }

  let handleValueChange = (row, col, val) => {
    let tempGrid = grid.slice();
    tempGrid[row][col] = val;
    setGrid(tempGrid);
  }

  return (
    <div className="board">
        <ul>{generateGrid(grid)}</ul>
    </div>
  );
}

export default Board;
