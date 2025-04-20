var minPairSum = function(nums) {
    nums.sort((a,b)=> a-b);
    let i=0; let j = nums.length-1;

    let result =0;

    while(i < j){
        let sum = nums[i] + nums[j];
         result = Math.max(result, sum);
         i++;
         j--;
    }
    return result;
};