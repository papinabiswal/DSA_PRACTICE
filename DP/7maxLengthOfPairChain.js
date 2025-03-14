// Recursion
var findLongestChain = function(pairs) {
    pairs.sort((a, b) => a[1] - b[1]);

    function helper(idx, prevEnd) {
        if (idx >= pairs.length) return 0; // Base case: No more pairs

        let take = 0;
        if (prevEnd < pairs[idx][0]) {
            take = 1 + helper(idx + 1, pairs[idx][1]); // Take current pair
        }
        
        let skip = helper(idx + 1, prevEnd); // Skip current pair

        return Math.max(take, skip);
    }

    return helper(0, -1);
};

// Buttom up approach

var findLongestChain = function(pairs) {
    pairs.sort((a, b) => a[0] - b[0]); // Sort by first element
 
     let n = pairs.length;
     let dp = new Array(n).fill(1); // Initialize with 1 (each pair is a chain itself)
 
     let maxLength = 1;
 
     for (let i = 1; i < n; i++) {
         for (let j = 0; j < i; j++) {
             if (pairs[j][1] < pairs[i][0]) { // Valid chain condition
                 dp[i] = Math.max(dp[i], dp[j] + 1);
             }
         }
         maxLength = Math.max(maxLength, dp[i]);
     }
 
     return maxLength;
 };

//. binary search + patience sorting

var findLongestChain = function(pairs) {
    pairs.sort((a,b)=> a[1] -b[1]);

    let subseq = [];
    for(let [left, right] of pairs){
         let leftIdx = 0, rightIdx = subseq.length-1;

         while(leftIdx <= rightIdx){
            let mid = Math.floor((leftIdx +rightIdx)/2);
            if(subseq[mid] < left){
                leftIdx = mid + 1;
                
            } else {
                rightIdx = mid-1;
            }
         }
         
         if (leftIdx === subseq.length) {
            subseq.push(right);
        }
    }
    return subseq.length;
};
findLongestChain([[1,2],[2,3],[3,4]]);