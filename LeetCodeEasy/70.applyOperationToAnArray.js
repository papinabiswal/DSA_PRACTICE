// simulation
var applyOperations = function(nums) {
    for(let i=0; i< nums.length-1; i++){
       if(nums[i] !== 0 && nums[i] === nums[i+1]){
            nums[i] *= 2;
            nums[i+1] = 0;
       }
    }
    let j =0;
    for(let i=0; i< nums.length; i++){
         if(nums[i] !== 0){
             nums[j] = nums[i];
             j++;
         }
    }

    while(j < nums.length){
       nums[j] = 0;
       j++;
    }
    return nums;
};

// one pass
var applyOperations = function(nums) {

    let j = 0;

    for(let i=0; i< nums.length; i++){
       if(nums[i] !== 0 && nums[i] === nums[i+1] && i+1 < nums.length){
            nums[i] *= 2;
            nums[i+1] = 0;
       }
       if(nums[i] !== 0){
          if(i !== j){
            [nums[i], nums[j]] = [nums[j], nums[i]];
          }
          j++
       }
    }
    return nums;
};


// 283. Move Zeroes
// 26. Remove Duplicates from Sorted Array
// 27. Remove Element
