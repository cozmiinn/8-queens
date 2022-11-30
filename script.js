var n = 8;

solveNQ();

function direction(board, row, col) {
    //checks left direction
    for(var i = 0; i < col; i++) {
        if (board[row][i] == 1) {
            return false;
        }
    }
    //checks the left corner direction
    for (var i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] == 1) {
            return false;
        }
    }
    //checks the right corner direction
    for (var i = row, j = col; j >= 0 && i < n; i++, j--) {
        if (board[i][j] == 1) {
            return false;
        }
    }
    return true;
}