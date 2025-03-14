// Recursion
var findLongestChain = function(pairs) {
    pairs.sort((a,b)=> a[1]-b[1]);
    function solve(idx, prevIdx){
       if(idx >= pairs.length) return 0;

       let take =0;
       if(prevIdx === -1 || pairs[idx][0] > pairs[prevIdx][1]){
           take = 1+solve(idx+1, idx);
       }
       let skip = solve(idx+1, prevIdx);
       return Math.max(take, skip);
    }
    return solve(0,-1);
};

// Recur + Memo

var findLongestChain = function(pairs) {
    pairs.sort((a,b)=> a[1]-b[1]);
    let n = pairs.length;
    let memo = new Array(n).fill(null).map(() => new Array(n + 1).fill(-1));

    function solve(idx, prevIdx){
       if(idx >= pairs.length) return 0;
       if(memo[idx][prevIdx+1] !== -1) return memo[idx][prevIdx+1];

       let take =0;
       if(prevIdx === -1 || pairs[idx][0] > pairs[prevIdx][1]){
           take = 1+solve(idx+1, idx);
       }
       let skip = solve(idx+1, prevIdx);
       memo[idx][prevIdx+1] = Math.max(take, skip);
       return memo[idx][prevIdx+1];
    }
    return solve(0,-1);
};

// Buttom up approach

var findLongestChain = function(pairs) {
    pairs.sort((a,b)=> a[1]-b[1]);
    let n = pairs.length;
    
    let dp = new Array(n).fill(1);
    let maxLIS = 1;
    for(let i=0; i< n; i++){
       for(let j=0; j< i; j++){
           if(pairs[j][1] < pairs[i][0] ){
              dp[i] = Math.max(dp[i], 1+dp[j]);
              maxLIS = Math.max(maxLIS, dp[i]);
           }
       }
    }
    return maxLIS;
 };

//. binary search + patience sorting

var findLongestChain = function(pairs) {
    pairs.sort((a, b) => a[1] - b[1]);

    let prev = pairs[0];
    let res = 1;

    for (let i = 1; i < pairs.length; i++) {
        const cur = pairs[i];
        if (cur[0] > prev[1]) {
            res++;
            prev = cur;
        }
    }

    return res; 
};
findLongestChain([[1,2],[2,3],[3,4]]);