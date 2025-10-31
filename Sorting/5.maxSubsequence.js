// too easy question.
// ⏱️ Complexity

// Time: O(n log n) → due to sorting

// Space: O(n) → for storing pairs
var maxSubsequence = function(nums, k) {
    let arr = nums.map((val, idx)=> [val,idx]);

    let topk = arr.sort((a,b)=> b[0] - a[0]).slice(0,k);

    topk.sort((a,b)=> a[1] -b[1]);
    
    return topk.map(([val])=> val);
};