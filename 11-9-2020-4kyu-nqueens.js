const hasRowConflict = (row, board) => {
  for (let i = 0; i < board[row].length; i++)
    if (board[row][i] !== 0)
      return true;
  return false;
};

const hasColumnConflict = (column, board) => {
  for (let i = 0; i < board[column].length; i++)
    if (board[i][column] !== 0)
      return true;
  return false;
};

const hasDiagonalConflict = (row, column, board) => {
  let left = column;
  let right = column;
  let up = row;
  let down = row;

  let length = Math.ceil(board[column].length / 2);
  let side = board[column].length;

  for (let i = 0; i < length; i++) {
    if (left > 0)
      left--;
    if (right < side - 1)
      right++;
    if (up > 0)
      up--;
    if (down < side - 1)
      down++;

    if (board[up][left] !== 0 ||
      board[up][right] !== 0 ||
      board[down][left] !== 0 ||
      board[down][right] !== 0) {
      return true;
    }
  }

  return false;
};

const hasConflicts = (row, column, board) => {
  if (hasColumnConflict(column, board) || hasRowConflict(row, board) || hasDiagonalConflict(row, column, board))
    return true;
  return false;
};

const aplhaNum = (column, row, size) => {
  return `${String.fromCharCode(column + 97)}${row === 9 ? 0 : Math.abs((row + 1) - size) + 1}`;
};

function queens(position, size) {
  let board = [];
  let result = [];

  // build board
  for (let i = 0; i < size; i++) {
    board[i] = [];
    for (let j = 0; j < size; j++)
      board[i][j] = 0;
  }

  // place first queen
  let currentRow = Math.abs(Number(position[1]) - size);
  let currentCol = position.charCodeAt(0) - 97;

  board[currentRow][currentCol] = 1;
  result.push(position);

  // place 'size' number of queens &&
  // record the position of each queen when placing them
  for (let i = 0; i < size - 1; i++) {

    while (hasConflicts(currentRow, currentCol, board)) {
      currentRow += 1;
      currentCol += 1;

      if (currentRow > size - 1)
        currentRow = currentRow - size;
      if (currentCol > size - 1)
        currentCol = currentCol - size;
    }

    board[currentRow][currentCol] = 1;
    result.push(aplhaNum(currentCol, currentRow, size));
  }

  console.log(board.join('\n'));
  return result.join(',');
}

console.log(queens('b4', 4));