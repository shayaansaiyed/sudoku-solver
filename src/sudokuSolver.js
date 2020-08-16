
function getCoordOfSquare(row, col){
    var squareCoord = [[], [], [], [], [], [], [], [], []];
    
    var row_lower_limit = Math.floor(row / 3) * 3;
    var row_upper_limit = (Math.floor(row / 3) + 1) * 3;

    var col_lower_limit = Math.floor(col / 3) * 3;
    var col_upper_limit = (Math.floor(col / 3) + 1) * 3; 
    
    var array_index = 0;
    for (var r = row_lower_limit; r < row_upper_limit; r++){
        for(var i = 0; i < 3; i++){
            squareCoord[array_index].push(r)
            array_index++;
        }
    }

    array_index = 0;
    for(var j = 0; j < 3; j++){
        for (var c = col_lower_limit; c < col_upper_limit; c++){
            squareCoord[array_index].push(c)
            array_index++;
        }
    }
    return squareCoord;
}

function checkValidPlacement(grid, row, col, currValue){

    for(var c = 0; c < 9; c++){
        if(grid[row][c] === currValue){
            return false;
        }
    }

    for(var r = 0; r < 9; r++){
        if(grid[r][col] === currValue){
            return false;
        }
    }

    var squareCoords = getCoordOfSquare(row, col);
    for(var i = 0; i < squareCoords.length; i++){
        r = squareCoords[i][0];
        c = squareCoords[i][1];

        if (grid[r][c] === currValue){
            return false;
        }
    }

    return true;
}

function getNextCoord(row, col){
    var newCol = (col + 1)  % 9;
    var newRow = row;

    if(newCol === 0){
        newRow = (row + 1)
    }

    return [newRow, newCol]
}

function SudokuSolverRec(grid, row, col){
    if(row === 9){
        return true;
    }

    var found = false;

    var [nextRow, nextCol] = getNextCoord(row, col);

    if (grid[row][col] !== 0){
        found = SudokuSolverRec(grid, nextRow, nextCol);
    } else {
        for (let i = 1; i < 10; i++){
            if (checkValidPlacement(grid, row, col, i)){
                grid[row][col] = i;
                found = SudokuSolverRec(grid, nextRow, nextCol);
                if (found === false){
                    grid[row][col] = 0;
                }
            }
        }
    }

    return found;
}

export function SolveSudoku(grid){
    console.log("Called into module");
    console.table(grid);
    SudokuSolverRec(grid, 0, 0);
    console.table(grid);
    return grid;
}
