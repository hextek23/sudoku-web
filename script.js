function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
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


function generateSudokuGrid() {//generates a full sudoku grid 9x9
  
  var grid = []; //9x9 the box(3x3) are the rows of this grid
  
  for (let i = 0; i < 9; i++){
    if(i == 0 || i == 4 || i == 8){// this generates the diagonals of the sudoku grid these are independant of each other wich means that you can generate these randomly
      var arr = generateRandom9();
      grid.push(arr);
    }
    else{
      grid.push([0,0,0,0,0,0,0,0,0])
    }
  }
  return grid;
}

function displayGridOnSite(){

  const sudokuGrid = generateSudokuGrid();
  var cell = 1;
  var box = 1; // a box is a 3x3 idk if this is the actual term ¯\_(ツ)_/¯

  for (let i = 0; i < 9; i++){
    for (let j = 0; j < 9; j++){
      
      let inputCell = document.querySelector(`.s${box} .g${cell}`)
      inputCell.value = sudokuGrid[i][j];
      cell++;
    }
    box++;
    cell=1;
  }
  return sudokuGrid;
}

let sudokuGrid = displayGridOnSite();
console.log(sudokuGrid);
