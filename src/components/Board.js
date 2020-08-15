import React from 'react';
import Square from './Square'
import './../App.css';

var sampleGrid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
]

function generateRow(array){
    var row = []
    for (let i = 0; i < 9; i++){
        if (array[i] != 0){
            row.push(<Square value={array[i]}/>);
        } else {
            row.push(<Square value=' '/>);
        }
        
    }
    return row;
}

function generateGrid(input2DArr){
    var grid = [];
    for (let i = 0; i < 9; i++){
        var row = generateRow(input2DArr[i])
        grid.push(<li>{row}</li>);
    }
    return grid;
}

function Board() {
  let grid = generateGrid(sampleGrid);  

  return (
    <div className="board">
        <ul>{grid}</ul>
    </div>
  );
}

export default Board;
