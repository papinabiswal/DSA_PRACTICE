// kaden's algorithm
// TC: O(n)
// SC: O(1)
// Leetcode 53
// kaden's algorithm tells kya me ek new subarray start karu ya phle wale subarray me add karu. If I add the current element to the previous subarray, the sum will be greater than the current element.

var maxSubArray = function(nums) {
    
    let currSubArrSum = nums[0];
    let maxSubArrSum = nums[0];

    for(let i=1; i< nums.length; i++){
        currSubArrSum = Math.max(nums[i], currSubArrSum+nums[i]);
        maxSubArrSum = Math.max(maxSubArrSum, currSubArrSum);
    }
    return maxSubArrSum;
};

// **************************************************************************************************************************************************************************************

// maximum absolute sum of any subarray(leetcode 1749)
// TC: O(n)
// SC: O(1)

var maxAbsoluteSum = function(nums) {
    
    let currSubArrSum = nums[0];
    let maxSubArrSum = nums[0];
   //  find the maximum subarray sum using kaden's algo
    for(let i=1; i< nums.length;i++){
        currSubArrSum = Math.max(nums[i], currSubArrSum+nums[i]);
        maxSubArrSum = Math.max(maxSubArrSum, currSubArrSum);
    }


     
    let currSubArrSummin = nums[0];
    let minSubArrSum = nums[0];
    //  find the minimum subarray sum using kaden's algo
    for(let i=1; i< nums.length;i++){
        currSubArrSummin = Math.min(nums[i], currSubArrSummin+nums[i]);
        minSubArrSum = Math.min(minSubArrSum, currSubArrSummin);
    }
 
   //  find the maximum abs value
   return Math.max(maxSubArrSum, Math.abs(minSubArrSum));
};


// **************************************************************************************************************************************************************************************


// 1186. Maximum Subarray Sum with One Deletion

var maximumSum = function(nums) {
    let currSubArrSum = nums[0];
    let maxSubArraySum = nums[0];
    let oneDel = 0;
    for(let i=1; i< nums.length; i++){
        oneDel = Math.max(oneDel + nums[i], currSubArrSum);
        currSubArrSum = Math.max(nums[i], currSubArrSum + nums[i]);
        maxSubArraySum = Math.max(maxSubArraySum, Math.max(currSubArrSum, oneDel));
    }
    return maxSubArraySum;
};

