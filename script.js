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
  
  // for (let i = 0; i < 9; i++){
  //   if(i == 0 || i == 4 || i == 8){// this generates the diagonals of the sudoku grid these are independant of each other wich means that you can generate these randomly
  //     var arr = generateRandom9();
  //     grid.push(arr);
  //   }
  //   else{
  //     grid.push([0,0,0,0,0,0,0,0,0])
  //   }
  // }

  var arr = generateRandom9();
  var usedIndex = [];
  for (let row = 0; row < 9; row++){
    for (let col = 0; col < 9; col++){
      if(row < 3 && col < 3){
        let rindex = Math.floor(Math.random() * 9);
        while(usedIndex.includes(rindex)){
          rindex = Math.floor(Math.random() * 9);
        }
        grid[row][col] = arr[rindex];
        usedIndex.push(rindex);
      }else if (row < 6 && col < 6 && row > 2 && col > 2){
        usedIndex = [];
        let rindex = Math.floor(Math.random() * 9);
        while(usedIndex.includes(rindex)){
          rindex = Math.floor(Math.random() * 9);
        }
        grid[row][col] = arr[rindex];
        usedIndex.push(rindex);
      }else if(row < 9 && col < 9 && row > 5 && col > 5){
        usedIndex = [];
        let rindex = Math.floor(Math.random() * 9);
        while(usedIndex.includes(rindex)){
          rindex = Math.floor(Math.random() * 9);
        }
        grid[row][col] = arr[rindex];
        usedIndex = [];
      }else{
        grid[row][col] = 0;
      }
    }
  }


  // for (let row = 0; row < 9; row++){
  //   for (let col = 0; col < 9; col++){
  //     if (grid[row][col] == 0){
  //       arrHorizontal = 
  //       for (let i = 1; i < 10; i++){

  //         if (i ){

  //         }
  //       }
  //     }
  //   }
  // }

  



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
//easter egg
//2easter egg

let sudokuGrid = displayGridOnSite();
console.log(sudokuGrid);