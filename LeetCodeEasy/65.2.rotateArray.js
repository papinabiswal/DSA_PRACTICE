// 1st learn rotate one value from array clockwise
function rotateOne(nums){
    let temp = nums[0];
    for(let i = 1; i< nums.length; i++){
        nums[i-1] = nums[i];
    }
    nums[nums.length-1] = temp;
    return nums;
}
rotateOne([1,2,3,4,5]);

// 2nd learn rotate k times from array clockwise and anticlockwise

var rotate = function(nums, k) {
    let n = nums.length;
    k = k%n;
    k = n-k; // do right shift
    for(let i =1; i<= k; i++){
        rotateOne(nums);
    }
    return nums;
   
};

function rotateOne(nums){
    let temp = nums[0];
    for(let i = 1; i< nums.length; i++){
        nums[i-1] = nums[i];
    }
    nums[nums.length-1] = temp;
    return nums;
}

// Optimized approach using reverse
// do partion 0 to k-1 and k to n-1 and then reverse the whole array
// check tap academy
var rotate = function(nums, k) {
    let n = nums.length;
    k = k%n;
    
    reverse(nums, 0, n-k-1);
    reverse(nums, n-k, n-1);
    reverse(nums, 0, n-1);
    return nums;
}

function reverse(nums, start, end){
    while(start < end){
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}