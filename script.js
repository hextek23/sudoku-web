function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
    return true;
}

function generateRandom9(){
  const arr9 = [1,2,3,4,5,6,7,8,9];
  
  //TODO shuffle the array

  return arr9;
}

function generateSudokuGrid() {
  const arr = generateRandom9();
  const grid = [];
  for (let row = 0; row < 9; row++){
    const currentRow = [];
    for (let col = 0; col < 9; col++){
      //const randomNum = Math.floor(Math.random() * 9) + 1;
      currentRow.push(arr[col]);
    }
    grid.push(currentRow);
  }
  return grid;
}

function displayGridOnSite(){
  const sudokuGrid = generateSudokuGrid();
  let cell = 0;
    for (let i = 0; i < 3; i++){
      for (let j = 0; j < 3; j++){
        cell++;
        const inputCell = document.querySelector(`.s1 .g${cell}`)
        inputCell.value = sudokuGrid[i][j];
      }
    }
  return sudokuGrid;
}

const sudokuGrid = displayGridOnSite();
console.log(sudokuGrid);
