// recursion

var shortestCommonSupersequence = function(str1, str2) {
    let m = str1.length, n = str2.length;

    function solve(i, j){
       if(i === m){
          return str2.slice(j);
       }
       if(j === n){
          return str1.slice(i);
       }
        
        if(str1[i] === str2[j]){
            return str1[i] + solve(i+1, j+1);
        } else {
            let option1 = solve(i+1, j);
            let option2 = solve(i, j+1);

            return (option1.length < option2.length) ? (str1[i] + option1) :  (str2[j] + option2)
        }

    }
    return solve(0, 0);
};

// buttom up
var shortestCommonSupersequence = function(s1, s2) {
    let m = s1.length, n = s2.length;
    let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(""));

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0) {
                dp[i][j] = s2.slice(0, j);
            } else if (j === 0) {
                dp[i][j] = s1.slice(0, i);
            } else if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + s1[i - 1];
            } else {
                dp[i][j] = (dp[i - 1][j].length < dp[i][j - 1].length)
                    ? dp[i - 1][j] + s1[i - 1]
                    : dp[i][j - 1] + s2[j - 1];
            }
        }
    }

    return dp[m][n];
};