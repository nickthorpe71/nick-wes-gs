

function square_sums_row(n) {
    let squares = getSquares(n);
    return squares[squares.length - 1];
}

// Gets all squared numbers that a number + itself or less could equal
function getSquares(n) {
    const arr = [];
    let i = 0;

    do {
        i++;
        arr.push(i * i);
    } while (i * i < n + n);

    return arr;
}

console.log(square_sums_row(15));