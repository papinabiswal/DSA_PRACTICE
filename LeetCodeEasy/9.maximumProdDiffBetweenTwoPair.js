// find the max two and prod it
// find the smallest two and pod it


var maxProductDifference = function(nums) {
    let max = secondMax =0;
    let small=secondSmall = Infinity;

    for(let i= 0; i< nums.length; i++){
       if(nums[i] > max){
           secondMax = max;
           max = nums[i];
       } else {
           secondMax = Math.max(secondMax, nums[i]);
       }

       if(nums[i] < small){
           secondSmall = small;
           small = nums[i];
       } else {
           secondSmall = Math.min(secondSmall, nums[i]); 
       }
    }

    return (max * secondMax) - (secondSmall * small);
};