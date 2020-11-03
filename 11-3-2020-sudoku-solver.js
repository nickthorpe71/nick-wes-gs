function sudoku(puzzle) {
  let updated = true, solved = false;

  while (updated && !solved) {
    updated = one_value_cell_constraint(puzzle);
    solved = is_solved(puzzle);
  }

  // Hard-Evil need brute force to finish off.  
  if (!solved) {
    puzzle = backtrack_based(puzzle);
    solved = is_solved(puzzle);
  }

  return puzzle;
}

let square_coordinates = [
  [1, 1, 1, 2, 2, 2, 3, 3, 3],
  [1, 1, 1, 2, 2, 2, 3, 3, 3],
  [1, 1, 1, 2, 2, 2, 3, 3, 3],
  [4, 4, 4, 5, 5, 5, 6, 6, 6],
  [4, 4, 4, 5, 5, 5, 6, 6, 6],
  [4, 4, 4, 5, 5, 5, 6, 6, 6],
  [7, 7, 7, 8, 8, 8, 9, 9, 9],
  [7, 7, 7, 8, 8, 8, 9, 9, 9],
  [7, 7, 7, 8, 8, 8, 9, 9, 9]
];

function one_value_cell_constraint(board) {

  let updated = false;

  // Convert every gap into an array of possibilities
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] == 0) {
        updated = complete_cell(board, r, c) || updated;
      }
    }
  }

  // Look out for any possibility that appears as a possibility
  // once-only in the row, column, or quadrant.
  // If it does, fill it in!
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (Array.isArray(board[r][c])) {
        let possibilities = board[r][c];
        updated = appears_once_only(board, possibilities, get_row(board, r), r, c) ||
          appears_once_only(board, possibilities, get_column(board, c), r, c) ||
          appears_once_only(board, possibilities, get_square(board, square_coordinates[r][c]), r, c) || updated;
      }
    }
  }

  // Reinitialize gaps back to zero before ending
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (Array.isArray(board[r][c])) {
        board[r][c] = 0;
      }
    }
  }

  return updated;
}


function backtrack_based(orig_board) {

  // Create a temporary board for our recursion. 
  let board = JSON.parse(JSON.stringify(orig_board));

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      // Process each incomplete cell
      if (board[r][c] == 0) {
        complete_cell(board, r, c);
        if (is_solved(board)) return board;
        let cell = board[r][c];
        // If we just created a list of possibilities, iterate them and recurse
        if (Array.isArray(cell)) {
          for (let i = 0; i < cell.length; i++) {
            // Create a temporary board for each recursion. 
            let board_2 = JSON.parse(JSON.stringify(board));
            // Choose a value
            board_2[r][c] = cell[i];
            // Recurse again using new board
            if (board_2 == backtrack_based(board_2)) {
              return board_2;
            }
          }
          return false; // dead end
        }
      }
    }
  }

  return false;

}

function get_row(board, row) {
  // Given a board, we can return a single row
  return board[row];
}

function get_column(board, column) {
  // Given a board, we iterate the rows to return a column
  var col = [];
  for (let row = 0; row < 9; row++) {
    col.push(board[row][column]);
  }
  return col;
}

function get_square(board, square) {
  let cells = [];
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (square == square_coordinates[r][c]) {
        cells.push(board[r][c]);
      }
    }
  }
  return cells;
}

function complete_cell(board, r, c) {
  let used = [...get_row(board, r), ...get_column(board, c), ...get_square(board, square_coordinates[r][c])];
  let possibilities = [];
  for (let p = 1; p <= 9; p++) {
    if (!used.includes(p)) {
      possibilities.push(p);
    }
  }
  if (possibilities.length == 1) {
    // If there is only one valid possibility, fill it in
    board[r][c] = possibilities[0];
    return true;
  } else {
    board[r][c] = possibilities;
    return false;
  }
}

function appears_once_only(board, possibilities, segment, r, c) {
  let updated = false;
  for (let i = 0; i < possibilities.length; i++) {
    let possibility = possibilities[i];
    let counter = 0;
    segment.forEach(cell => {
      if (Array.isArray(cell)) {
        if (cell.includes(possibility)) {
          counter++;
        }
      } else {
        if (cell == possibility) {
          counter++;
        }
      }
    });
    if (counter == 1) {
      board[r][c] = possibility;
      updated = true;
      break;
    }
  }
  return updated;
}

function compare(expected, actual) {
  let array1 = expected.slice();
  let array2 = actual.slice();
  return array1.length === array2.length && array1.sort().every(function (value, index) { return value === array2.sort()[index]; });
}

function is_solved(board) {
  let expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let valid = true;
  // Check all rows
  for (let r = 0; r < 9 && valid == true; r++) {
    if (!compare(expected, get_row(board, r))) {
      valid = false;
    }
  }
  // Check all columns
  for (let c = 0; c < 9 && valid == true; c++) {
    if (!compare(expected, get_column(board, c))) {
      valid = false;
    }
  }
  // Check all quadrants
  for (let q = 1; q < 9 && valid == true; q++) {
    if (!compare(expected, get_square(board, q))) {
      valid = false;
    }
  }
  return valid;
}

let puzzle = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]];

// let solution = [
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9]];

console.log(sudoku(puzzle));