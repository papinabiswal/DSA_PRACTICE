var minCut = function(s) {
    let n = s.length;
    function solve(i, j){
       if(isPallindrome(s, i, j)){
           return 0;
       }

       let part = Infinity
       for(let k=i; k <= j-1; k++){
          let temp = 1+solve(i, k) + solve(k+1, j);
          part = Math.min(temp, part);
       }
       return part;
    }
    return solve(0, n-1)
};

function isPallindrome(s, i, j){
     if(i > j) return true;
     if(s[i] === s[j]){
         return isPallindrome(s, i+1, j-1);
     }
     return false;
}


// buttom up
var minCut = function(s) {
    let n = s.length;
    let t = new Array(n).fill(null).map(()=> new Array(n).fill(false));

    for(let L =1; L<=n; L++){
      for(let i=0; i+L-1 < n; i++){
          let j = i+L-1;
          if(i === j){
             t[i][j] = true;
          } else if(i+1 === j){
              t[i][j] = (s[i] === s[j])
          } else {
             t[i][j] = (s[i] === s[j] && t[i+1][j-1])
          }
      }
    }

    let dp = new Array(n).fill(0);

    for(let i=0; i< n; i++){
         if(t[0][i] === true){
            dp[i] = 0
         } else {
            dp[i] = Infinity;
            for(let k=0; k< i; k++){
               if(t[k+1][i] === true && 1+dp[k] < dp[i]){
                   dp[i] = 1+dp[k]
               }
            }
         }
    }
    return dp[n-1]
}