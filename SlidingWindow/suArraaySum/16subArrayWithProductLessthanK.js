// Subarrays with Product Less Than K
// here, instead of using the atMost(k) - atMost(k - 1) trick, we use direct sliding window because:

// The condition is product < k (not exactly equal) — so atMost is enough.

function numSubarrayProductLessThanK(nums, k) {
    if(k <= 1) return 0;
    let i=0, j=0,prod=1, result=0;
    let n = nums.length;

    while(j < n){
       prod *= nums[j];

       while(prod >= k){
          prod /= nums[i];
          i++;
       }
       result += j-i+1; 
       j++
    }
    return result;
}
