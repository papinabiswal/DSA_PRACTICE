var getMaximumGold = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let maxGold = 0;

    function dfs(row, col){
        if(row < 0 || row >= m || col < 0 || col >= n || grid[row][col] === 0){
           return 0;
        }

        const temp = grid[row][col];
        grid[row][col] = 0;

        const down = dfs(row + 1, col);
        const up = dfs(row - 1, col);
        const right = dfs(row, col + 1);
        const left = dfs(row, col - 1);

        grid[row][col] = temp;

        return temp + Math.max(down, up, right, left);
    }

    for(let row =0; row < m; row++){
       for(let col =0; col < n; col++){
          if(grid[row][col] > 0){
            maxGold = Math.max(maxGold, dfs(row, col));
          }
       }
    }
    return maxGold;
};