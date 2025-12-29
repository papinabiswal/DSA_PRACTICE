var firstMissingPositive = function(nums) {
    let n = nums.length;
    let contains1 = false;

    // Step 1: Check if 1 exists & clean invalid numbers
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 1){
            contains1 = true;
        }
        if(nums[i] <= 0 || nums[i] > n){
            nums[i] = 1;
        }
    }
    // If 1 is missing
    if(!contains1) return 1;

    for(let i =0; i< n; i++){
      let val = Math.abs(nums[i]);
      let idx = val-1;
      
      if(nums[idx] < 0) continue;
      nums[idx] = -nums[idx];
    }

     // Step 3: Find first positive index
    for(let i =0; i < n; i++){
        if(nums[i] > 0){
            return i+1;
        }
    }
    return n+1;
};