// Given an integer array nums, return the length of the longest strictly increasing subsequence.
// Recursion
var lengthOfLIS = function(nums) {
    function helper(idx, prevIdx){
        if(idx >= nums.length) return 0;
        let take = 0;
        if(prevIdx === -1 || nums[prevIdx] < nums[idx]){
           take = 1+helper(idx+1, idx);
        }
        let skip = helper(idx+1, prevIdx);
        return Math.max(take, skip);
    }
    return helper(0, -1)
};

// Recursion + Memo
// Because prevIdx can be -1,
// but array indices cannot be negative in JavaScript! 🚀

// So to store memoization for prevIdx = -1,
// you shift everything by +1.
var lengthOfLIS = function(nums) {
    let n = nums.length
    let memo = new Array(n+1).fill(-1).map(() => new Array(n + 1).fill(-1));

    function helper(idx, prevIdx){
        if(idx >= n) return 0;
        if (memo[idx][prevIdx + 1] !== -1) return memo[idx][prevIdx + 1];

        let take = 0;
        if(prevIdx === -1 || nums[prevIdx] < nums[idx]){
           take = 1+helper(idx+1, idx);
        }
        let skip = helper(idx+1, prevIdx);
        return (memo[idx][prevIdx + 1] = Math.max(take, skip));
    }
    return helper(0, -1)
};

// Buttom up approach

var lengthOfLIS = function(nums) {
    let n = nums.length
     
    if (n === 0) return 0;
    // sare element khud me ek subsequence, that's why assign to one. so this will maintain the length of subsesequence of that index
    // i par end hone wala sbse bada subsequence 
    let dp = new Array(n).fill(1); 

    let maxLIS = 1;

    for(let i=0; i< n; i++){
       for(let j=0; j< i; j++){
        if(nums[j] < nums[i]) {
           dp[i] = Math.max(dp[i], 1+dp[j]); // here it is checking the length in dp of that index. i pe end hone wala subsequence length and j pe end hone wala subsequence length. +1 becacause i ke saath add ho rha
           maxLIS = Math.max(maxLIS, dp[i]);
        }

      }
  }
  return maxLIS;
};

// binary search + patience sorting

function lengthOfLIS(nums){
    let subseq = [];

    for(let num of nums){
       let left =0, right = subseq.length-1;
 
       while(left <= right){
          let mid = Math.floor((left+ right)/2);
          if(subseq[mid] >= num){
             right = mid-1;
          } else {
             left= mid+1;
          }
       }
       if(left < subseq.length){
         subseq[left] = num;
       } else {
         subseq.push(num);
       }
    }
    return subseq.length;
}
lengthOfLIS([10,9,2,5,3,7,101,18]);