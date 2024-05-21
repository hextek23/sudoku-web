function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
    return true;
}

function generateSudokuGrid() {
  const grid = [];
  for (let row = 0; row < 9; row++) {
      const currentRow = [];
      for (let col = 0; col < 9; col++) {
          const randomNum = Math.floor(Math.random() * 9) + 1;
          currentRow.push(randomNum);
      }
      grid.push(currentRow);
  }
  return grid;
}

function displayGridOnSite(){
  const sudokuGrid = generateSudokuGrid();
  const cell1 = document.querySelector(".s1 .g1");
  cell1.value = sudokuGrid[0][0];
  console.log(cell1.value);
  return sudokuGrid;
}

const sudokuGrid = displayGridOnSite();
console.log(sudokuGrid);
