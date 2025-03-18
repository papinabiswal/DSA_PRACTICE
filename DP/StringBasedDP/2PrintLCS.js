// Recursion

function printLCS(text1, text2){
    let m = text1.length;
    let n = text2.length;
    
    function solve(i, j){
       if(i >= m || j >= n) return "";

       if(text1[i] === text2[j]){
           return text1[i] + solve(i+1, j+1);
       } else {
            let option1 = solve(i + 1, j);
            let option2 = solve(i, j + 1);
            return option1.length > option2.length ? option1 : option2;
       }
    }
    return solve(0, 0);
}
printLCS("abcde", "ace");

// buttom up

var printLCS = function(text1, text2) {
    let m = text1.length;
    let n = text2.length;

    // Step 1: Create a DP table (m+1) x (n+1) initialized to 0
    let dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));

    // Step 2: Fill the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1]; // If characters match, extend LCS
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); // Take the maximum LCS so far
            }
        }
    }

    // Step 3: Backtrack to find the LCS string
    let i = m, j = n;
    let lcs = [];

    while (i > 0 && j > 0) {
        if (text1[i - 1] === text2[j - 1]) {
            lcs.push(text1[i - 1]); // Add character to LCS result
            i--; j--; // Move diagonally
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--; // Move up
        } else {
            j--; // Move left
        }
    }

    return lcs.reverse().join(""); // Reverse to get the correct order
};