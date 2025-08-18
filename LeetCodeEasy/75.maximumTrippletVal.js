// Brute force
var maximumTripletValue = function(nums) {
    let result = 0;
    for(let i =0; i< nums.length; i++){
       for(let j = i+1; j < nums.length; j++){
            for(let k = j+1; k < nums.length; k++){
                  result = Math.max(result, (nums[i]-nums[j])* nums[k]);
            }
       }
    }
    return result;
};

// optimise it 
var maximumTripletValue = function(nums) {
    let result = 0;
    let n = nums.length;
    let leftMax = new Array(n).fill(0);

    for(let i = 1; i< n; i++){
       leftMax[i] = Math.max(leftMax[i-1], nums[i-1]);
    }

    let rightMax = new Array(n).fill(0);
    for(let i = n-2; i>=0; i--){
       rightMax[i] = Math.max(rightMax[i+1], nums[i+1]);
    }

    for(let i=0; i<n; i++){
      result = Math.max(result, (leftMax[i] - nums[i])* rightMax[i]);
    }
    return result;
};

// best solution with o(1) space complexity
var maximumTripletValue = function(nums) {
    let result = 0;
    let n = nums.length;
    

    let maxDiff = 0;
    let maxi = 0;
    for(let k = 0; k< n; k++){
       result = Math.max(result, maxDiff * nums[k]);
       maxDiff = Math.max(maxDiff, maxi-nums[k]);
       maxi = Math.max(maxi, nums[k]);
    }
    return result;
};