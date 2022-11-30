var n = 8;

solveNQ();

function direction(board, row, col) {
    //checks left direction
    for (var i = 0; i < col; i++) {
        if (board[row][i] == 1) {
            return false;
        }
    }
    //checks left corner direction
    for (var i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] == 1) {
            return false;
        }
    }
    //checks right corner direction
    for (var i = row, j = col; j >= 0 && i < n; i++, j--) {
        if (board[i][j] == 1) {
            return false;
        }
    }
    return true;
}

function recursive(board, col) {
    if (col === n) {
        printfSolution(board);
        //print another solution when the n=8
        return;
    }
    for (var i = 0; i < n; i++) {
        if (direction(board, i, col)) {
            board[i][col] = 1;
            recursive(board, col + 1);
            board[i][col] = 0;
        }
    }
    return false;
}

function solve() {
    var board = genBoard(n);
    recursive(board, 0);
}

function genBoard(n) {
    var board = [];
    for (var i = 0; i < n; i++) {
        board[i] = [];
        for (var j = 0; j < n; j++) {
            board[i][j] = 0;
        }
    }
    return board;
}
