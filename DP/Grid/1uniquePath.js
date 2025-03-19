// recursion
var uniquePaths = function(m, n) {
    function solve(i, j){
       if(i === m-1 && j === n-1) return 1;
       if(i < 0 || i >= m || j < 0 || j >= n) return 0;

       let right = solve(i, j+1);
       let bottom = solve(i+1, j);

       return right + bottom;
    }
     return solve(0,0);
};

// recursion + memo
var uniquePaths = function(m, n) {
    let memo = Array(m).fill(null).map(()=> Array(n).fill(-1))
    function solve(i, j){
       if(i === m-1 && j === n-1) return 1;
       if(i < 0 || i >= m || j < 0 || j >= n) return 0;

       if(memo[i][j] !== -1) return memo[i][j];

       let right = solve(i, j+1);
       let bottom = solve(i+1, j);

       return memo[i][j] = right + bottom;
    }
     return solve(0,0);
};

// bottom up approach

var uniquePaths = function(m, n) {
    let dp = Array(m).fill(null).map(()=> Array(n).fill(0));
 
    dp[0][0] = 1;
 
    for(let col=1; col< n; col++){
       dp[0][col] = 1;
    }
 
    for(let row=1; row < m; row++){
        dp[row][0] = 1;
    }
 
    for (let i = 1; i < m; i++) {
         for (let j = 1; j < n; j++) {
             dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
         }
     }
     return dp[m-1][n-1];
 };