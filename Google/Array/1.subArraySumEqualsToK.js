// Brute force
// O(n^2)

// fine all possible subarray and check if sum is equal to k

let subarraySum = function(nums, k) {
    let count = 0;
    for(let i=0; i< nums.length; i++){
        let sum =0;
        for(let j = i; j< nums.length; j++){
           sum += nums[j];
           if(sum === k){
              count++;
           }
        }
    }
    return count;
};

// Optimized
// O(n)
// using prefix sum and hashmap

let subarraySum1 = function(nums, k) {
    let count = 0;
    let sum = 0;

    const map = new Map();
    map.set(0,1);

    for(const element of nums){
       sum += element;

       if(map.has(sum-k)){
           count += map.get(sum-k);
       }

       map.set(sum, (map.get(sum) || 0) + 1 );
    }
    return count;
};


// similar question. longest subarray with sum k
// 325. Maximum Size Subarray Sum Equals k
var longestSubarraySum = function(nums, k) {
    let map = new Map(); 
    map.set(0, -1); // prefix sum 0 occurs before array starts
    let sum = 0;
    let maxLen = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        // Check if sum - k exists → means subarray found
        if (map.has(sum - k)) {
            let length = i - map.get(sum - k);
            maxLen = Math.max(maxLen, length);
        }

        // Store prefix sum **only if not stored before**
        if (!map.has(sum)) {
            map.set(sum, i);
        }
    }

    return maxLen;
};
