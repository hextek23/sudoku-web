function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
    return true;
}

function generateRandom9(){
  var arr9 = [1,2,3,4,5,6,7,8,9];
  var copy = [];
  
  //TODO shuffle the array
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

//generates a full sudoku grid 9x9
function generateSudokuGrid() {
  const arr = generateRandom9();
  const grid = [];
  var count9 = 0; //the array or random 9 vals is a 1dimensional array so the for loop variables wont work for the index
  for (let row = 0; row < 3; row++){
    const currentRow = [];
    for (let col = 0; col < 3; col++){
      count9++;
      currentRow.push(arr[count9 - 1]);
    }
    grid.push(currentRow);
  }

  //TODO add functionality to generate the other diagonal 3x3's

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
