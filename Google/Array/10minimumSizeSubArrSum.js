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