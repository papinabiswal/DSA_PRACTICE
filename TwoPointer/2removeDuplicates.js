var removeDuplicates = function(nums) {
    let n = nums.length;

    let i=0, j=1;

    while(j < n){
        if(nums[i] !== nums[j]){
            i++;
            nums[i] = nums[j];
        }
        j++;
    }
    return i+1;
};