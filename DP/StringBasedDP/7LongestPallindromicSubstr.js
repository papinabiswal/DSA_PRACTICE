// Recursion
function isPallindrome(s,i,j){
    if(i > j) return true;

    if(s[i] === s[j]){
        return isPallindrome(s, i+1, j-1)
    }
    return false;
}
var longestPalindrome = function(s) {
    let n = s.length;
    let sp =0;
    let maxLen =0;

    for(let i=0; i< n; i++){
       for(let j=i; j< n; j++){
          if(isPallindrome(s,i,j)){
              if(j-i+1 > maxLen){
                maxLen = j-i+1;
                sp=i;
              }
          }
       }
    }
    return s.slice(sp, sp+maxLen);
};

// memoization
function isPallindrome(s,i,j, dp){
    if(i > j) return true;

    if(dp[i][j] !== undefined) return dp[i][j];

    if(s[i] === s[j]){
        dp[i][j] = isPallindrome(s, i+1, j-1, dp);
        return dp[i][j];
    }
    dp[i][j] = false;
    return false;
}

// Buttom up + blue print

var longestPalindrome = function(s) {
    let n = s.length;
    let sp =0;
    let maxLen =1;
    let dp = new Array(n).fill(null).map(() => new Array(n).fill(false));

     for(let L=1; L<=n; L++){
       for(let i=0; i+L-1 < n ; i++){
             let j = i+L-1;
             if(i === j){
                 dp[i][j] = true;
             } else if(i+1 === j){
                 dp[i][j] = (s[i] === s[j])
             } else {
                 dp[i][j] = (s[i] === s[j] && dp[i+1][j-1]);
             }

             if(dp[i][j] && L > maxLen){
                 maxLen= L;
                 sp=i;
             }
       }
     }
    return s.slice(sp, sp+maxLen);
};

