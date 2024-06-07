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