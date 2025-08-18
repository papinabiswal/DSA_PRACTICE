// [3,4,5,1,2] lets this is the input
// there will one dip(which is 5, 1)
// if more than one dip it's not sorted and rotated
var isArraySpecial = function(nums) {
    if(nums.length === 1) return true;
    for(let i=0; i< nums.length; i++){
       if(nums[i]%2 === nums[i+1]%2){
         return false;
       }
    }
    return true;
};