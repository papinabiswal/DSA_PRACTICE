// Recursion 

var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    function solve(i, j){
       if(i === m-1 && j === n-1) return 1;
       if(i < 0 || i >= m || j < 0 || j >= n || obstacleGrid[i][j] === 1) return 0;

       let right = solve(i, j+1);
       let bottom = solve(i+1, j);

       return right + bottom;
    }
     return solve(0,0);
};

// Bottom up 
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
     if(obstacleGrid[0][0] === 1) return 0;

     let dp = Array(m).fill(null).map(()=> Array(n).fill(0));
      
     // fill the first row
        for (let col = 0; col < n; col++) {
            if (col > 0 && obstacleGrid[0][col - 1] === 1) {
            dp[0][col] = 0;
            obstacleGrid[0][col] = 1; // Mark as unreachable
        } else if (obstacleGrid[0][col] === 1) {
            dp[0][col] = 0;
        } else {
            dp[0][col] = 1;
        }
       }

       
       // Fill the first column
    for (let row = 0; row < m; row++) {
        if (row > 0 && obstacleGrid[row - 1][0] === 1) {
            dp[row][0] = 0;
            obstacleGrid[row][0] = 1; // Mark as unreachable
        } else if (obstacleGrid[row][0] === 1) {
            dp[row][0] = 0;
        } else {
            dp[row][0] = 1;
        }
    }

    // Fill the rest of the grid
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }

    return dp[m-1][n-1];
};