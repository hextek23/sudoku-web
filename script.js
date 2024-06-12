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
  
  grid = generateSudokuDiagonals();

  var colCheck = 0;

  for(let row = 0; row < 9; row++){
    for(let col = 0; col < 9; col++){
      if(grid[row][col] == 0){ //if the cell to fill is 0 which means it hasn't been filled yet
        for(let input = 1; input < 10; input++){

          if(checkRow(grid, row, input) && checkColumn(grid, col, input) && checkBox(grid, row, col, input)){
            grid[row][col] = input;
          }else{
            
          }



          // if(!grid[row].includes(input)){ // if the num to input is not in the row you can check the column
            
          //   for(let column = 0; column < 9; column++){
          //     if(!grid[row][column] == input){
          //       colCheck++;
          //     }
          //   }
          //   if(colCheck == 9){
          //     grid[row][col] = input; //this does not work for some reason
          //   }
          // }
        }
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