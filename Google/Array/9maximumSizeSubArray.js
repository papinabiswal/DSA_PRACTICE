// Maximum Size Subarray Sum Equals k
function maxSuArrayLen(nums, k){
    let map = new Map();
    let maxLength = 0;
    let sum =0;

    for(let i=0; i< nums.length; i++){
         sum += nums[i];
        if(sum === k){
            maxLength = i+1;
        }
        if(map.has(sum-k)){
            maxLength = Math.max(maxLength, i-map.get(sum-k));
        }

        if(!map.has(sum)){
            map.set(sum, i)
        }
    }
    return maxLength;
}
maxSuArrayLen([1, -1, 5, -2, 3], 3);


// nums = [1, -1, 5, -2, 3], k = 3

// i: 0, sum = 1
// i: 1, sum = 0
// i: 2, sum = 5
//    → sum - k = 2 (not in map)
// i: 3, sum = 3
//    → sum === k ⇒ maxLen = 4
// i: 4, sum = 6
//    → sum - k = 3 (found at i = 3)
//    → maxLen = max(4, 4 - 3) = 4