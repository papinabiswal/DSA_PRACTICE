// If i == j, it means there's only one character left, which is already a palindrome → 0 insertions needed.

// If i > j, it means the indices have crossed each other, meaning we've already checked all characters → 0 insertions needed.
// Recursion
var minInsertions = function(s) {
    function solve(i, j) {
        if (i >= j) return 0; // Base case: Single character or empty string is already a palindrome

        if (s[i] === s[j]) {
            return solve(i + 1, j - 1); // No insertion needed if both characters match
        } else {
            return 1 + Math.min(solve(i, j - 1), solve(i + 1, j)); // Insert character to match
        }
    }

    return solve(0, s.length - 1);
};

// Recursion + memo
var minInsertions = function(s) {
    let n = s.length;
    let dp = new Array(n).fill(null).map(() => new Array(n).fill(-1));
    function solve(i, j){
       if(i >= j) return 0;
       if(dp[i][j] !== -1) return dp[i][j];
       if(s[i] === s[j]){
          return dp[i][j] = solve(i+1, j-1);
       } else {
          return dp[i][j] = 1+ Math.min(solve(i+1, j), solve(i, j-1));
       }
    }
    return solve(0, s.length-1);
};

// buttom up + blue print

var minInsertions = function(s) {
    let n = s.length;
    let dp = new Array(n).fill(null).map(() => new Array(n).fill(0));

    // A single character is inherently a palindrome and requires 0 insertions.
    
    for (let L = 2; L <= n; L++) { // L is the length of substring
        for (let i = 0; i < n - L + 1; i++) {
            let j = i + L - 1;
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1]; // If both characters match, no extra insertion needed
            } else {
                dp[i][j] = 1 + Math.min(dp[i + 1][j], dp[i][j - 1]); // Choose minimum insertions needed
            }
        }
    }

    return dp[0][n - 1];
};

// 1d
var minInsertions = function(s) {
    let n = s.length;
    let prev = new Array(n).fill(0);
    let curr = new Array(n).fill(0);

    for (let L = 2; L <= n; L++) {
        for (let i = 0; i <= n - L; i++) {
            let j = i + L - 1;

            if (s[i] === s[j]) {
                curr[i] = prev[i + 1];  // No new insertions needed
            } else {
                curr[i] = 1 + Math.min(prev[i], curr[i + 1]);  // Insert at either end
            }
        }
        [prev, curr] = [curr, prev];  // Swap rows for space optimization
    }

    return prev[0];  // The final result is stored in prev[0]
};

