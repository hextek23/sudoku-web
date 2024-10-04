const fullGrid = generateSudokuGrid();

function isNumberKey(evt) {
  console.log(evt.target.className);
  console.log(evt.target.parentElement.className);
  //TODO fill partialgrid from this method
  

    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;

    return true; 
    
}

function fillPartialGrid(evt){
  if(evt.target.parentElement.className == "sudoku9 s1"){ // i chose wrong classnames in my html and i don't want to refactor the entire code so this will have to do
    if(evt.target.className.includes("g1")){
      partialgrid[0][0] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g2")){
      partialgrid[0][1] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g3")){
      partialgrid[0][2] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g4")){
      partialgrid[1][0] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g5")){
      partialgrid[1][1] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g6")){
      partialgrid[1][2] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g7")){
      partialgrid[2][0] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g8")){
      partialgrid[2][1] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g9")){
      partialgrid[2][2] = parseInt(evt.target.value);
    }
  }else if(evt.target.parentElement.className.includes("s2")){
    if(evt.target.className.includes("g1")){
      partialgrid[0][3] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g2")){
      partialgrid[0][4] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g3")){
      partialgrid[0][5] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g4")){
      partialgrid[1][3] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g5")){
      partialgrid[1][4] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g6")){
      partialgrid[1][5] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g7")){
      partialgrid[2][3] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g8")){
      partialgrid[2][4] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g9")){
      partialgrid[2][5] = parseInt(evt.target.value);
    }
  }else if(evt.target.parentElement.className.includes("s3")){
    if(evt.target.className.includes("g1")){
      partialgrid[0][6] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g2")){
      partialgrid[0][7] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g3")){
      partialgrid[0][8] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g4")){
      partialgrid[1][6] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g5")){
      partialgrid[1][7] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g6")){
      partialgrid[1][8] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g7")){
      partialgrid[2][6] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g8")){
      partialgrid[2][7] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g9")){
      partialgrid[2][8] = parseInt(evt.target.value);
    }
  }else if(evt.target.parentElement.className.includes("s4")){
    if(evt.target.className.includes("g1")){
      partialgrid[3][0] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g2")){
      partialgrid[3][1] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g3")){
      partialgrid[3][2] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g4")){
      partialgrid[4][0] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g5")){
      partialgrid[4][1] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g6")){
      partialgrid[4][2] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g7")){
      partialgrid[5][0] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g8")){
      partialgrid[5][1] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g9")){
      partialgrid[5][2] = parseInt(evt.target.value);
    }
  }else if(evt.target.parentElement.className.includes("s5")){
    if(evt.target.className.includes("g1")){
      partialgrid[3][3] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g2")){
      partialgrid[3][4] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g3")){
      partialgrid[3][5] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g4")){
      partialgrid[4][3] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g5")){
      partialgrid[4][4] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g6")){
      partialgrid[4][5] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g7")){
      partialgrid[5][3] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g8")){
      partialgrid[5][4] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g9")){
      partialgrid[5][5] = parseInt(evt.target.value);
    }
  }else if(evt.target.parentElement.className.includes("s6")){
    if(evt.target.className.includes("g1")){
      partialgrid[3][6] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g2")){
      partialgrid[3][7] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g3")){
      partialgrid[3][8] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g4")){
      partialgrid[4][6] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g5")){
      partialgrid[4][7] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g6")){
      partialgrid[4][8] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g7")){
      partialgrid[5][6] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g8")){
      partialgrid[5][7] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g9")){
      partialgrid[5][8] = parseInt(evt.target.value);
    }
  }else if(evt.target.parentElement.className.includes("s7")){
    if(evt.target.className.includes("g1")){
      partialgrid[6][0] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g2")){
      partialgrid[6][1] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g3")){
      partialgrid[6][2] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g4")){
      partialgrid[7][0] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g5")){
      partialgrid[7][1] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g6")){
      partialgrid[7][2] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g7")){
      partialgrid[8][0] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g8")){
      partialgrid[8][1] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g9")){
      partialgrid[8][2] = parseInt(evt.target.value);
    }
  }else if(evt.target.parentElement.className.includes("s8")){
    if(evt.target.className.includes("g1")){
      partialgrid[6][3] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g2")){
      partialgrid[6][4] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g3")){
      partialgrid[6][5] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g4")){
      partialgrid[7][3] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g5")){
      partialgrid[7][4] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g6")){
      partialgrid[7][5] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g7")){
      partialgrid[8][3] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g8")){
      partialgrid[8][4] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g9")){
      partialgrid[8][5] = parseInt(evt.target.value);
    }
  }else if(evt.target.parentElement.className.includes("s9")){
    if(evt.target.className.includes("g1")){
      partialgrid[6][6] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g2")){
      partialgrid[6][7] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g3")){
      partialgrid[6][8] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g4")){
      partialgrid[7][6] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g5")){
      partialgrid[7][7] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g6")){
      partialgrid[7][8] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g7")){
      partialgrid[8][6] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g8")){
      partialgrid[8][7] = parseInt(evt.target.value);
    }else if(evt.target.className.includes("g9")){
      partialgrid[8][8] = parseInt(evt.target.value);
    }
  }
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
  recursiveBackAlgo();

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

  

  console.log(grid); //marked
  return grid;
}

function removeRandomCells(grid) { //TODO cells that aren't empty at start should be unchangable
  // Create a deep copy of the grid to avoid modifying the original one
  let gridCopy = grid.map(row => row.slice()); // Deep copy

  for (let i = 0; i < 32; i++) {
      gridCopy[Math.floor(Math.random() * 9)][Math.floor(Math.random() * 9)] = null;
  }
  return gridCopy;
}

function displayGridOnSite(grid){

  const sudokuGrid = grid;

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

var solverBtn = document.getElementById("solver");
solverBtn.addEventListener("click", solver);

function solver(){
  let background = document.querySelector(`body`);
  console.log("this is the partial", partialgrid);
  console.log("this is hte full", fullGrid);
  function compareGrids(fullGrid, partialgrid) {
    // Iterate over every row and column of the grids
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        // If the value in the partial grid doesn't match the full grid, return false
        if (partialgrid[row][col] !== fullGrid[row][col]) {
          return false; // Mismatch found
        }
      }
    }
    // If no mismatches were found, the grids are identical
    return true;
  }
  
  // Example usage
  const isGridsEqual = compareGrids(fullGrid, partialgrid);
  if (isGridsEqual) {
    console.log("Congratulations! The player's grid is correct.");
    background.style.background = "green";
  } else {
    console.log("There are some mistakes in the player's grid.");
    background.style.background = "red";
  }
  
}

console.log(fullGrid)
partialgrid = removeRandomCells(fullGrid);
displayGridOnSite(partialgrid);