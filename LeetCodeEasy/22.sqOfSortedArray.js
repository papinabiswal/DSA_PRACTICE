var sortedSquares = function(nums) {
    let result = [];
    for(let i=0; i< nums.length; i++){
        result.push(nums[i] * nums[i]);
    }
    result.sort((a,b)=> a-b);
    return result;
};

// using two pointer;
// get the sq both first and last and then compare.
// which is bigger, push it in an array

var sortedSquares = function(nums) {
    let res = new Array(nums.length).fill(0);
    let left = 0;
    let right = nums.length -1;

    for(let i = nums.length -1; i>=0; i--){
       if(Math.abs(nums[left]) > Math.abs(nums[right])){
            res[i] = nums[left] ** 2;
            left++;
       } else {
          res[i] = nums[right] ** 2;
          right--;
       }
    }
    return res;
};