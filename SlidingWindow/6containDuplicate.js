var containsNearbyDuplicate = function(nums, k) {
    let i=0, j=0;
    let st = new Set();
    let n = nums.length;

    while(j < n){
       if(Math.abs(i-j) > k){
           st.delete(nums[i]);
           i++;
       }
       if(st.has(nums[j])){
           return true;
       } 
       st.add(nums[j]);
       j++;
    }
    return false;
};