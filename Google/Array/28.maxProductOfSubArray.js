var maxProduct = function(nums) {
    let maxElem = -Infinity;
    for(let i=0; i< nums.length; i++){
        let prod = 1;
       for(let j =i; j< nums.length; j++){
            prod *= nums[j];
            maxElem = Math.max(prod, maxElem);
       }
    }
    return maxElem;
};


// optimized approach