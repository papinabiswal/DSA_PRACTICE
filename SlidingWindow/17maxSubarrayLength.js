//  Length of Longest Subarray With at Most K Frequency

var maxSubarrayLength = function(nums, k) {
    let n = nums.length;
    let freq = {};

    let i=0, j=0;
    let result =0;

    while (j < n) {
       freq[nums[j]] = (freq[nums[j]] || 0) + 1;

       while(freq[nums[j]] > k){
           freq[nums[i]]--;
           if(freq[nums[1]] === 0){
             delete freq[nums[i]];
           }
           i++;
       }
       result = Math.max(result, j-i+1);
       j++;
    }
    return result;
};