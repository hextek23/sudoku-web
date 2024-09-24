document.addEventListener("selectionchange", function() {
  let selection = window.getSelection();
  
  if (!selection.isCollapsed) {  // There is a selection
      let selectedElement = selection.anchorNode.parentElement; // Get parent of the selected text
      console.log("Selected element's class:", selectedElement.className);
  } else {
      console.log("Text deselected");
  }
});

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
    console.log(fullGrid);
    return true;
}

function generateRandom9(){
  var arr9 = [1,2,3,4,5,6,7,8,9];
  var copy = [];
  
  //shuffle the array
  n = arr9.length;
  while (n){
    // Pick a remaining element
    i = Math.floor(Math.random() * arr9.length);

    //If not alreadey shuffled, move it to the new array
    if(i in arr9){
      copy.push(arr9[i]);
      delete arr9[i];
      n--;
    }
  }
  return copy;
}

function generateSudokuDiagonals(){
  var grid = []; //9x9 the box(3x3) are the rows of this grid

  for (let i = 0; i < 9; i++){
    grid.push([0,0,0,0,0,0,0,0,0])
  }

  var arr = generateRandom9();
  var usedIndex = [];
  for (let row = 0; row < 9; row++){
    for (let col = 0; col < 9; col++){
      if(row < 3 && col < 3){

        let rindex = Math.floor(Math.random() * 9);
        while(usedIndex.includes(rindex)){
          rindex = Math.floor(Math.random() * 9);
        }
        console.log(`${row} and ${col}`);
        grid[row][col] = arr[rindex];

        usedIndex.push(rindex);

      }else if (row < 6 && col < 6 && row > 2 && col > 2){
        if(row == 3 && col == 3){
          usedIndex = [];
        }

        let rindex = Math.floor(Math.random() * 9);
        while(usedIndex.includes(rindex)){
          rindex = Math.floor(Math.random() * 9);
        }
        grid[row][col] = arr[rindex];
        usedIndex.push(rindex);

      }else if(row < 9 && col < 9 && row > 5 && col > 5){

        if(row == 6 && col == 6){
          usedIndex = [];
        }

        let rindex = Math.floor(Math.random() * 9);
        while(usedIndex.includes(rindex)){
          rindex = Math.floor(Math.random() * 9);
        }
        grid[row][col] = arr[rindex];
        usedIndex.push(rindex);

      }else{
        grid[row][col] = 0;
      }
    }
  }
  return grid;
}

function checkRow(grid, row, input){
  if(grid[row].includes(input)){
    return false;
  }else{
    return true;  
  }
}

function checkColumn(grid, col, input){
  for(let row = 0; row < 9; row++){
    if(grid[row][col] == input){
      return false;
    }
  }
  return true;
}

function checkBox(grid, row, col, input){
  if(row < 3){
    //check for first 3
    if(col<3){
      for(let r =0; r < 3; r++){
        for(let c = 0; c < 3; c++){
          if(grid[r][c] == input){
            return false;
          }
        }
      }
      return true;
    }else if(col<6){
      for(let r =0; r < 3; r++){
        for(let c = 3; c < 6; c++){
          if(grid[r][c] == input){
            return false;
          }
        }
      }
      return true;
    }else{
      for(let r =0; r < 3; r++){
        for(let c = 6; c < 9; c++){
          if(grid[r][c] == input){
            return false;
          }
        }
      }
      return true;
    }
  }else if(row < 6){ //row check
    if(col<3){
      for(let r =3; r < 6; r++){
        for(let c = 0; c < 3; c++){
          if(grid[r][c] == input){
            return false;
          }
        }
      }
      return true;
    }else if(col<6){
      for(let r =3; r < 6; r++){
        for(let c = 3; c < 6; c++){
          if(grid[r][c] == input){
            return false;
          }
        }
      }
      return true;
    }else{
      for(let r =3; r < 6; r++){
        for(let c = 6; c < 9; c++){
          if(grid[r][c] == input){
            return false;
          }
        }
      }
      return true;
    }
  }else{ // last else
    if(col<3){
      for(let r =6; r < 9; r++){
        for(let c = 0; c < 3; c++){
          if(grid[r][c] == input){
            return false;
          }
        }
      }
      return true;
    }else if(col<6){
      for(let r =6; r < 9; r++){
        for(let c = 3; c < 6; c++){
          if(grid[r][c] == input){
            return false;
          }
        }
      }
      return true;
    }else{
      for(let r =6; r < 9; r++){
        for(let c = 6; c < 9; c++){
          if(grid[r][c] == input){
            return false;
          }
        }
      }
      return true;
    }
  }
}


function generateSudokuGrid() {//generates a full sudoku grid 9x9
  
  //grid of cells to fill recursively
  let gridToFill = [
    [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8],
    [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8],
    [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [2, 8],
    [3, 0], [3, 1], [3, 2], [3, 6], [3, 7], [3, 8],
    [4, 0], [4, 1], [4, 2], [4, 6], [4, 7], [4, 8],
    [5, 0], [5, 1], [5, 2], [5, 6], [5, 7], [5, 8],
    [6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5],
    [7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [7, 5],
    [8, 0], [8, 1], [8, 2], [8, 3], [8, 4], [8, 5]
];

  grid = generateSudokuDiagonals();
  fullGrid = grid;
  recursiveBackAlgo();
  removeRandomCells();

  function recursiveBackAlgo() {
    for (let i = 0; i < gridToFill.length;) {  // Loop through the grid cells to be filled
      let row = gridToFill[i][0];
      let col = gridToFill[i][1];
      let filled = false;
      
      for (let input = grid[row][col] + 1; input <= 9; input++) {  // Start with the next possible number
        if (checkRow(grid, row, input) && checkColumn(grid, col, input) && checkBox(grid, row, col, input)) {
          grid[row][col] = input;  // Place valid input
          filled = true;  // Mark that we filled this cell
          break;  // Move to the next cell
        }
      }
      
      if (!filled) {  // No valid number found
        grid[row][col] = 0;  // Reset current cell
        
        // Backtrack: move to the previous filled cell
        i--;
      } else {
        // Move to the next cell
        i++;
      }
    }
  }

  function removeRandomCells(){
    for(let i = 0; i < 32; i ++){
      grid[Math.floor(Math.random() * 8)][Math.floor(Math.random() * 8)] = null;
    }
  }


  return grid;
}

function displayGridOnSite(){

  const sudokuGrid = generateSudokuGrid();

  var cell = 0;
  var box = 0; // a box is a 3x3 idk if this is the actual term ¯\_(ツ)_/¯

  for (box; box < 9; box++){
    for (let i = 1; i < 4; i++){
      for (let j = 1; j < 4; j++){
        switch (box) {
          case 0:
            var inputCell = document.querySelector(`.s${i} .g${j}`);
            inputCell.value = sudokuGrid[box][cell];
            cell++
            break;
          case 1:
            var inputCell = document.querySelector(`.s${i} .g${j+3}`);
            inputCell.value = sudokuGrid[box][cell];
            cell++
            break;
          case 2:
            var inputCell = document.querySelector(`.s${i} .g${j+6}`);
            inputCell.value = sudokuGrid[box][cell];
            cell++
            break;
          case 3:
            var inputCell = document.querySelector(`.s${i+3} .g${j}`);
            inputCell.value = sudokuGrid[box][cell];
            cell++

            break;
          case 4:
            var inputCell = document.querySelector(`.s${i+3} .g${j+3}`);
            inputCell.value = sudokuGrid[box][cell];
            cell++
            break;
          case 5:
            var inputCell = document.querySelector(`.s${i+3} .g${j+6}`);
            inputCell.value = sudokuGrid[box][cell];
            cell++
            break;
          case 6:
            var inputCell = document.querySelector(`.s${i+6} .g${j}`);
            inputCell.value = sudokuGrid[box][cell];
            cell++
            break;
          case 7:
            var inputCell = document.querySelector(`.s${i+6} .g${j+3}`);
            inputCell.value = sudokuGrid[box][cell];
            cell++
            break;
          case 8:
            var inputCell = document.querySelector(`.s${i+6} .g${j+6}`);
            inputCell.value = sudokuGrid[box][cell];
            cell++
            break;
          
        }
        
      }
    }
    cell=0;
  }
  return sudokuGrid;
}



let sudokuGrid = displayGridOnSite();
console.log(sudokuGrid);
