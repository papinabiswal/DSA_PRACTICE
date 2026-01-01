// Input: nums = [3,4,5,2]
// Output: 12 
// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/description/

var maxProduct = function(nums) {
    let maxNo = nums[0];
    let result = 0;

    for(let i= 1; i< nums.length; i++){
         
         result = Math.max(((maxNo-1) * (nums[i]-1)), result );
         maxNo = Math.max(maxNo, nums[i]);
    }
    return result;
};

// 2nd approach
// find the two largest number and multiply them
// Maximum Product of Two Elements in an Array
var maxProduct = function(nums) {
    let firstMaxNo = 0;
    let secondMaxNo = 0;

    for(let i=0; i< nums.length; i++){
        if(nums[i] > firstMaxNo){
            secondMaxNo = firstMaxNo;
            firstMaxNo = nums[i];
        } else {
            secondMaxNo = Math.max(secondMaxNo, nums[i]);
        }
    }
    return (firstMaxNo-1) * (secondMaxNo - 1);
};