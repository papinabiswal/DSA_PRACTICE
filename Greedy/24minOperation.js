var minOperations = function(nums) {
    let freq = {};

    for(let num of nums){
       freq[num] = (freq[num] || 0) + 1;
    }


    let operation =0;
    for(let key in freq){
       let count = freq[key];

       if(count === 1) return -1;

       operation += Math.ceil(count/3)
    }
    return operation;
};