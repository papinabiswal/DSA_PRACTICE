// bruteforce
var maxWidthRamp = function(nums) {
    let n =nums.length;
    let maxL =0
    for(let i=0; i < n; i++){
       for(let j =i+1; j < n; j++){
           if(nums[i] <= nums[j]){
              maxL = Math.max(maxL, j-i)
           }
       }
    }
    return maxL;
};

// little optimise

var maxWidthRamp = function(nums) {
    let n =nums.length;
    let maxL =0
    for(let i=0; i < n; i++){
       for(let j =n-1; j > i; j--){
           if(nums[i] <= nums[j]){
              maxL = Math.max(maxL, j-i);
              break;
           }
       }
    }
    return maxL;
};

// fully optimise || monotonic stack
var maxWidthRamp = function(nums) {
    const n = nums.length;
    const stack = [];
    
    for (let i = 0; i < n; i++) {
      if (stack.length === 0 || nums[i] < nums[stack[stack.length - 1]]) {
        stack.push(i);
      }
    }
    
    let maxRamp = 0;
    
    for (let j = n - 1; j >= 0; j--) {
      while (stack.length > 0 && nums[j] >= nums[stack[stack.length - 1]]) {
        maxRamp = Math.max(maxRamp, j - stack.pop());
      }
    }
    
    return maxRamp;
  };
  maxWidthRamp([6,0,8,2,1,5]);