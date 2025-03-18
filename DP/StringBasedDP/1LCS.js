// Recursion

var longestCommonSubsequence = function(text1, text2) {
    let m = text1.length;
    let n = text2.length;

    function solve(i, j){
        if(m === 0 || n === 0 || i>=m || j >= n) return 0;

        if(text1[i] === text2[j]){
           return 1+solve(i+1, j+1);
        } 
            return Math.max(solve(i+1, j), solve(i, j+1));

    }
    return solve(0, 0);
};

// Recur+ memo

var longestCommonSubsequence = function(text1, text2) {
    let m = text1.length;
    let n = text2.length;
    let memo = new Array(m).fill(null).map(() => new Array(n).fill(-1));

    function solve(i, j){
        if(m === 0 || n === 0 || i>=m || j >= n) return 0;

        if (memo[i][j] !== -1) return memo[i][j];

        if(text1[i] === text2[j]){
           return memo[i][j] = 1+solve(i+1, j+1);
        } 
            return memo[i][j] = Math.max(solve(i+1, j), solve(i, j+1));

    }
    return solve(0, 0);
};

// Buttom up approach

var longestCommonSubsequence = function(text1, text2) {
    let m = text1.length;
    let n = text2.length;
    
    let dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));
    for(let i=1; i<=m; i++){
        for(let j=1; j<=n; j++){
             if(text1[i-1] === text2[j-1]){
                 dp[i][j] = 1+ dp[i-1][j-1];
             } else {
                 dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
             }
        }
    }
    return dp[m][n];
};

