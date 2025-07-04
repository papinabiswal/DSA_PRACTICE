// Given an array of integers nums, calculate the pivot index of this array.
// TC: O(n)
// SC: O(1)
// Approach: Prefix Sum 
// Intuition: We can calculate the leftSum and rightSum for each index and check if they are equal.
// If they are equal, then that index is the pivot index.
// We can calculate the rightSum by subtracting the leftSum and the current element from the totalSum.
// We can calculate the totalSum by summing all the elements in the array.

var pivotIndex = function(nums) {
    let totalSum = nums.reduce((acc, val)=> acc + val, 0);

    let leftSum =0;
    for(let i=0; i< nums.length; i++){
         let rightSum = totalSum - leftSum - nums[i];

         if(leftSum === rightSum){
            return i;
         }

         leftSum += nums[i];
    }
    return -1;
};