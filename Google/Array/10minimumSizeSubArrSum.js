var minSubArrayLen = function(target, nums) {
    let i=0, j=0;
    let sum = 0;
    let n = nums.length;
    let minLength = Infinity;

    while(j < n){
        sum += nums[j];
        while(sum >= target){
           minLength = Math.min(minLength, j-i+1);
           sum -= nums[i]; // jb windo size chhota karenge i ko shift krna parega, to us value ko minus krna hoga; qki sum v decrease hoga;
           i++;
        }
       j++;
    }
    return minLength === Infinity ? 0 : minLength;
};

// Input: target = 7, nums = [2,3,1,2,4,3]  
// Output: 2  
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.