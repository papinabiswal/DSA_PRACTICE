// Recursion 

var minDistance = function(word1, word2) {
    let m = word1.length;
    let n = word2.length;
    function solve(i, j){
         if(i=== m) return n-j;
         if(j===n) return m-i

         if(word1[i] === word2[j]){
            return solve(i+1, j+1);
         } else {
            let insertC = 1 + solve(i, j+1);
            let deletec =  1 + solve(i+1, j);
            let replaceC =  1 + solve(i+1, j+1);

            return Math.min(insertC, deletec, replaceC);
         }
    }
    return solve(0,0);
};

// recursion + memo
var minDistance = function(word1, word2) {
    let m = word1.length;
    let n = word2.length;

    let memo = new Array(m).fill(null).map(() => new Array(n).fill(-1));
    function solve(i, j){
         if(i=== m) return n-j;
         if(j===n) return m-i
         if(memo[i][j] !== -1) return memo[i][j]
         if(word1[i] === word2[j]){
            return memo[i][j] = solve(i+1, j+1);
         } else {
            let insertC = 1 + solve(i, j+1);
            let deletec =  1 + solve(i+1, j);
            let replaceC =  1 + solve(i+1, j+1);

            return memo[i][j] = Math.min(insertC, deletec, replaceC);
         }
    }
    return solve(0,0);
};

// Buttom up
var minDistance = function(word1, word2) {
    let m = word1.length;
    let n = word2.length;

    // Create DP table of size (m+1) x (n+1) initialized to 0
    let dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0));

    // Fill the table
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0) {
                dp[i][j] = j; // If first string is empty, insert all characters from second string
            } else if (j === 0) {
                dp[i][j] = i; // If second string is empty, delete all characters from first string
            } else if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]; // If characters match, no cost
            } else {
                dp[i][j] = 1 + Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]); 
                // Insert (dp[i][j-1]), Delete (dp[i-1][j]), Replace (dp[i-1][j-1])
            }
        }
    }

    return dp[m][n];
};