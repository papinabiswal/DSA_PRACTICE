var numberOfGoodPartitions = function(nums) {
    let n = nums.length;
    let lastIdx = new Map();
    let mod = 1e9+7;

    for(let i=0; i< n; i++){
        lastIdx.set(nums[i], i)
    }

    let result = 1;
    let i=0;
    let j= lastIdx.get(nums[0]);

    while(i < n){
        if(i > j){
            result = (result * 2) % mod
        }
        j = Math.max(j, lastIdx.get(nums[i]));
        i++;
    }
    return result;
};