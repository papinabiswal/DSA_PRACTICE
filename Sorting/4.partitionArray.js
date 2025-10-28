// Approach

// Sort the array — this ensures numbers close to each other are grouped together.

// Initialize:

// count = 1 (at least one group needed)

// minVal = nums[0] (starting of current group)

// Traverse from left to right:

// If nums[i] - minVal > k,
// → we need to start a new group
// → increment count and update minVal = nums[i].

var partitionArray = function(nums, k) {
    nums.sort((a,b)=> a-b);

    let minVal = nums[0];
    let count = 1; // at least one group needed
    for(let i = 1; i<nums.length; i++){
        if(nums[i] - minVal > k){
            count++;
            minVal = nums[i];
        }
    }
    return count;
};