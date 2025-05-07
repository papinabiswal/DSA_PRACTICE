var numSquares = function(n) {

    function minSquares(n){
       if(n === 0) return 0;
 
       let minCount = Infinity;
       for(let i=1; i*i <= n; i++){
          minCount = Math.min(minCount, 1+ minSquares(n - i*i))
       }
       return minCount;
    }
    return minSquares(n); 
 };

 // recursion with memoization
 var numSquares = function(n) {

    const memo = new Array(n + 1).fill(-1);

   function minSquares(n){
      if(n === 0) return 0;
      if (memo[n] !== -1) return memo[n];

      let minCount = Infinity;
      for(let i=1; i*i <= n; i++){
         minCount = Math.min(minCount, 1+ minSquares(n - i*i))
      }
      memo[n] = minCount;
      return minCount;
   }
   return minSquares(n); 
};

// using bottom up approach
var numSquares = function(n) {
    const dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;
  
    for(let i=1; i <= n; i++){
       for(let j =1; j * j <= i; j++){
          dp[i] = Math.min(dp[i], 1+dp[i - j*j])
       }
    }
    return dp[n];
  };