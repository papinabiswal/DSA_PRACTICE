var countSubarrays = function(nums, k) {
    let maxE = Math.max(...nums);
  
    let i=0, j=0;
    let n = nums.length;
    let result = 0;
    let maxCount = 0;
  
    while(j < n){
        if(maxE === nums[j]){
          maxCount++;
        }  
  
        while(maxCount >= k){
            result += n-j;
            if(nums[i] === maxE){
              maxCount--;
            }
            i++;
        }
        j++;
    }
    return result;
  };