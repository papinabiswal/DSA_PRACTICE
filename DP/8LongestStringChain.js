// Here we can not implement binary search of LIS , Binary search is for numbers , here we are calulating strings. so we can use bs

// Recursion
var longestStrChain = function(words) {
    words.sort((a,b)=> a.length - b.length);

    function solve(idx, prevIdx){
        if(idx >= words.length) return 0;
        let take =0;
        if(prevIdx === -1 || isPredecessor(words[prevIdx], words[idx])){
            take = 1 + solve(idx+1, idx);
        }
        let skip = solve(idx+1, prevIdx);

        return Math.max(take, skip);
    }
    return solve(0,-1);
};

function isPredecessor(prev, curr){
   let m = prev.length, n = curr.length;
   if(m >= n || n-m !== 1) return false // must be 1 diff

   let i=0; let j =0;
   while( i < m && j < n){
       if(prev[i] === curr[j]){
         i++;
       }
       j++;
   }
   return i === m;
}

// Recur + memo

var longestStrChain = function(words) {
    words.sort((a,b)=> a.length - b.length);
    let n = words.length;
    let memo = new Array(n).fill(null).map(() => new Array(n + 1).fill(-1));

    function solve(idx, prevIdx){
        if(idx >= words.length) return 0;
        if (memo[idx][prevIdx + 1] !== -1) return memo[idx][prevIdx + 1];
        let take =0;
        if(prevIdx === -1 || isPredecessor(words[prevIdx], words[idx])){
            take = 1 + solve(idx+1, idx);
        }
        let skip = solve(idx+1, prevIdx);

        return memo[idx][prevIdx + 1] = Math.max(take, skip);
    }
    return solve(0,-1);
};

function isPredecessor(prev, curr){
   let m = prev.length, n = curr.length;
   if(m >= n || n-m !== 1) return false // must be 1 diff

   let i=0; let j =0;
   while( i < m && j < n){
       if(prev[i] === curr[j]){
         i++;
       }
       j++;
   }
   return i === m;
}

// Buttoom up approach
var longestStrChain = function(words) {
    words.sort((a,b)=> a.length - b.length);
    let n = words.length;
    
    let dp = new Array(n+1).fill(1);
    let maxLIS = 1;

    for(let i=0; i< n; i++){
       for(let j=0; j<i; j++){
           if(isPredecessor(words[j], words[i])){
              dp[i] = Math.max(dp[i], 1+dp[j]);
              maxLIS = Math.max(dp[i], maxLIS)
           }
       }
    }
    return maxLIS;
};

function isPredecessor(prev, curr){
   let m = prev.length, n = curr.length;
   if(m >= n || n-m !== 1) return false // must be 1 diff

   let i=0; let j =0;
   while( i < m && j < n){
       if(prev[i] === curr[j]){
         i++;
       }
       j++;
   }
   return i === m;
}
