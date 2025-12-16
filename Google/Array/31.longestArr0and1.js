// Longest subarray equal number of 0 and 1;
// https://www.geeksforgeeks.org/dsa/largest-subarray-with-equal-number-of-0s-and-1s/

function longestSubArray(nums){
    let maxLen = 0;
    let prefix = 0;
    let map = new Map();

    map.set(0,-1);

    for(let i=0; i< nums.length; i++){
        prefix += (nums[i] === 0 ? -1 : 1);

        if(map.has(prefix)){
            maxLen = Math.max(maxLen, i-map.get(prefix))
        } else {
            map.set(prefix, i);
        }
    }
    return maxLen;
}
longestSubArray([1, 0, 1, 1, 1, 0, 0]);