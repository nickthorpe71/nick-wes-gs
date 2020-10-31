function sum(matrix) {
  const side = matrix.length;

  let total = 0;
  let countDown = side;

  for (let i = 0; i < side; i++) {
    total += matrix[i][side - countDown];
    total += matrix[i][countDown - 1];
    countDown--;
  }

  return total;
}

let diagonals = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(sum(diagonals));