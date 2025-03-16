// Recursion 
function shortestCommonSupersequence(s1, s2) {
    let m = s1.length, n = s2.length;
    function solve(i, j){
       if (i === m) return n - j;
       if(j === n) return m-i;
        
        if(s1[i] === s2[j]){
             return 1+ solve(i+1, j+1);
        } else {
            return 1 + Math.min(solve(i+1, j), solve(i, j+1));
        }
    }
    return solve(0,0);
}

// recursion + memo

function shortestCommonSupersequence(s1, s2) {
    let m = s1.length, n = s2.length;
     let memo = new Array(m).fill(null).map(() => new Array(n).fill(-1));
    function solve(i, j){
       if (i === m) return n - j;
       if(j === n) return m-i;
       
       if (memo[i][j] !== -1) return memo[i][j];
        
        
        if(s1[i] === s2[j]){
             return memo[i][j] = 1+ solve(i+1, j+1);
        } else {
            return memo[i][j] = 1 + Math.min(solve(i+1, j), solve(i, j+1));
        }
    }
    return solve(0,0);
}

// Buttom up
var shortestCommonSupersequence = function(s1, s2) {
    let m = s1.length, n = s2.length;

    // Step 1: Create a DP table of size (m+1) x (n+1)
    let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Step 2: Fill the DP table (Base cases)
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0) dp[i][j] = j; // If s1 is empty, take all characters from s2
            else if (j === 0) dp[i][j] = i; // If s2 is empty, take all characters from s1
            else if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1]; // If characters match, move diagonally
            } else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1]); // Take min of both choices
            }
        }
    }

    return dp[m][n]; // The bottom-right cell contains the final answer
};