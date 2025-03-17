// recursion

var longestPalindromeSubseq = function(s) {
    function LPS(i, j){
       if(i > j) return 0;
       if(i === j) return 1;

       if(s[i] === s[j]){
         return 2+ LPS(i+1, j-1);
       } else {
         return Math.max(LPS(i + 1, j), LPS(i, j - 1));
       }
    }
    return LPS(0, s.length-1);
};

// recur + memo
var longestPalindromeSubseq = function(s) {
    let m = s.length;
    let dp = new Array(m).fill(null).map(() => new Array(m).fill(-1));

    function LPS(i, j){
       if(i > j) return 0;
       if(i === j) return 1;
       if (dp[i][j] !== -1) return dp[i][j];

       if(s[i] === s[j]){
         return dp[i][j] = 2+ LPS(i+1, j-1);
       } else {
         return dp[i][j] = Math.max(LPS(i + 1, j), LPS(i, j - 1));
       }
    }
    return LPS(0, s.length-1);
};

// Buttom up with blue print

var longestPalindromeSubseq = function(s) {
    let n = s.length;
    if (n === 0) return 0;

    let dp = new Array(n).fill(null).map(() => new Array(n).fill(0));

    // Base Case: Single character subsequences are palindromes of length 1
    for(let i=0; i< n; i++){
       dp[i][i] = 1;
    }

    // Fill DP Table for substrings of length L
    for (let L = 2; L <= n; L++) {
        for(let i=0; i+L-1 < n; i++){
            let j = i+L-1;
            if(s[i] === s[j]){
               dp[i][j] = 2 + dp[i + 1][j - 1]; // Match case
            } else {
                dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1])
            }
        }
    }
    return dp[0][n-1];
};