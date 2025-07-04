var longestOnes = function(nums, k) {
    let i=0;
    let j=0;

    while(j < nums.length){
        if(nums[j] === 0){
           k--;
        }

        if(k < 0){
            if(nums[i]  === 0){
                k++;
            }
            i++;
        }
        j++;
    }
    return j-i;
};