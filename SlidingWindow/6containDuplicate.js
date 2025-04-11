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

// or

var containsNearbyDuplicate = function(nums, k) {
    const seen = {};

    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i]) && i - seen[nums[i]] <= k) {
        return true;
        }
        seen[nums[i]] = i; // value ka index store krna hai
    }

    return false;
};