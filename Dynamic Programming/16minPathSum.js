var minPathSum = function(grid) {
    let m = grid.length;
    let n = grid[0].length;

   function dfs(i,j){
      if (i === m - 1 && j === n - 1) {
            return grid[i][j];
        }
      if (i === m - 1) {
            // Can only move right
            return grid[i][j] + dfs(i, j + 1);
       }

       if (j === n - 1) {
            // Can only move down
            return grid[i][j] + dfs(i + 1, j);
        }
    
     return grid[i][j] + Math.min(dfs(i + 1, j), dfs(i, j + 1));
   }
   return dfs(0,0); 
};

// Buttom up 
var minPathSum = function(grid) {
    let m = grid.length;
    let n = grid[0].length;

   const dp = new Array(m).fill(0).map(()=> new Array(n).fill(0));
   dp[0][0] = grid[0][0];

   for(let i=1; i<m; i++){
      dp[i][0] = grid[i][0] + dp[i-1][0];
   }

   for(let j=1; j< n; j++){
      dp[0][j] = grid[0][j] + dp[0][j-1];
   }

   for(let i=1; i< m; i++){
       for(let j=1; j<n; j++){
           dp[i][j] = grid[i][j] + Math.min(dp[i-1][j], dp[i][j-1]);
       }
   }
   return dp[m-1][n-1];
};