var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;

    const backtrack = (i, j, idx) => {
        if(idx === word.length) return true;

        if(i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[idx]){
           return false;
        }
        // common backtrack part
        let temp = board[i][j];
        board[i][j] = '$';
         
        const result = backtrack(i+1, j, idx+1) || // up down left right
                       backtrack(i-1, j, idx+1) || // down up left right
                       backtrack(i, j+1, idx+1) || // left right up down
                       backtrack(i, j-1, idx+1);  // right left up down

        board[i][j] = temp;
        return result;
    }

     for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if(backtrack(i,j,0)){
                return true;
            }
        }
    }
    return false;
};