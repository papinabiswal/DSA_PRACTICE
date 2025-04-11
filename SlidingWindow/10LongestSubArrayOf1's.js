var longestSubarray = function(nums) {
    let zeroCount =0;
    let maxL =0 ;
    let i=0;
 
    for(let j=0; j< nums.length; j++){
        if(nums[j] === 0){
          zeroCount++;
        }
 
        if(zeroCount > 1){
           if(nums[i] === 0){
             zeroCount--;
             
           }
           i++;
        }
        maxL = Math.max(maxL, j-i);   // (j-i+1)-1 ek element delete krna hai
    }
    return maxL;
 };