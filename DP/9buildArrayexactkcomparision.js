var numOfArrays = function(n, m, k) {
    let N = n;
    let M = m;
    let K = k;
    function solve(idx, searchCost, maxSoFar){
       if(idx >= N) {
           if(searchCost === K){
            return 1;
           }
           return 0;
       }
        let result =0;
       for(let i=1; i<= M; i++){
           if(i > maxSoFar){
             result = result+ solve(idx+1, searchCost+1, i);
           } else {
            result = result + solve(idx+1, searchCost, maxSoFar);
           }

       }
       return result;
    }

    return solve(0, 0, -1);
};

// recursion with memo
var numOfArrays = function(n, m, k) {
    const MOD = 1e9 + 7;

   // 3D memoization array initialized with -1
   let memo = Array.from({ length: n + 1 }, () => 
       Array.from({ length: k + 1 }, () => 
           Array(m + 1).fill(-1)
       )
   );

   function solve(idx, searchCost, maxSoFar) {
       if (idx === n) {
           return searchCost === k ? 1 : 0;
       }

       if (memo[idx][searchCost][maxSoFar] !== -1) {
           return memo[idx][searchCost][maxSoFar];
       }

       let result = 0;

       for (let i = 1; i <= m; i++) {
           if (i > maxSoFar) {
               result = (result + solve(idx + 1, searchCost + 1, i)) % MOD;
           } else {
               result = (result + solve(idx + 1, searchCost, maxSoFar)) % MOD;
           }
       }

       return (memo[idx][searchCost][maxSoFar] = result);
   }

   return solve(0, 0, 0);
};