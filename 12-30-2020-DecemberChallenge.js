// According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let newBoard = new Array(board.length)    
    for(let row = 0; row < board.length; row++) {
        newBoard[row] = new Array(board[0].length)
        for(let column = 0; column < board[0].length; column++) {
            let count = 0
            //top left cell
            //top cell
            //top right cell
            if(row === 0) {
                if(column === 0) {
                    count = board[row][column + 1] + board[row + 1][column] + board[row + 1][column + 1]
                }    
                else if(column === board[0].length - 1) {                    
                    count = board[row][column - 1] + board[row + 1][column] + board[row + 1][column - 1]
                }    
                else {
                    count = board[row][column + 1] + board[row + 1][column] + board[row + 1][column + 1] + board[row][column - 1] + board[row + 1][column - 1]
                }                    
            }
            //bottom right cell
            //bottom cell
            //bottom left cell
            else if(row === board.length - 1){
                if(column === 0) {
                    count = board[row][column + 1] + board[row - 1][column] + board[row - 1][column + 1]
                }    
                else if(column === board[0].length - 1) {
                    count = board[row][column - 1] + board[row - 1][column] + board[row - 1][column - 1]
                }    
                else {
                    count = board[row][column + 1] + board[row - 1][column] + board[row - 1][column + 1] + board[row][column - 1] + board[row - 1][column - 1]
                }
            }
            //left cell
            else if(column === 0){
                count = board[row - 1][column] + board[row - 1][column + 1] + board[row][column + 1] + board[row + 1][column] + board[row + 1][column + 1]
            }
            //right cell
            else if(column === board[0].length - 1){
                count = board[row - 1][column] + board[row - 1][column - 1] + board[row][column - 1] + board[row + 1][column] + board[row + 1][column - 1]
            } 
            //center cell
            else {
                count = board[row - 1][column] + board[row - 1][column - 1] + board[row - 1][column + 1] + board[row][column - 1] + board[row][column + 1] + board[row + 1][column] + board[row + 1][column - 1] + board[row + 1][column + 1]
            }

            if(board[row][column] === 1) {
                count < 2 || count > 3
                ?newBoard[row][column] = 0
                :newBoard[row][column] = 1
            }
            else {
                count === 3
                ?newBoard[row][column] = 1
                :newBoard[row][column] = 0
            }            
        }
    }

    for(let row = 0; row < board.length; row++) {
        for(let column = 0; column < board[0].length; column++) {
            board[row][column] = newBoard[row][column]
        }
    }
    
};

console.log(gameOfLife(
    [
        [0,1,0],
        [0,0,1],
        [1,1,1],
        [0,0,0]
    ])) //[[0,0,0],[1,0,1],[0,1,1],[0,1,0]]