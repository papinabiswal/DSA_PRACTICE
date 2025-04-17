var shortestSubarray = function(nums, k) {
    const n = nums.length;
   const prefixSums = new Array(n + 1).fill(0);

   // Step 1: Create prefix sums
   for (let i = 0; i < n; i++) {
       prefixSums[i + 1] = prefixSums[i] + nums[i];
   }

   let result = Infinity;
   const deque = [];

   for (let i = 0; i <= n; i++) {
       // Step 2: Try to find a valid subarray with sum >= k
       while (deque.length > 0 && prefixSums[i] - prefixSums[deque[0]] >= k) {
           result = Math.min(result, i - deque[0]);
           deque.shift();
       }

       // Step 3: Maintain a monotonic increasing deque
       while (deque.length > 0 && prefixSums[i] <= prefixSums[deque[deque.length - 1]]) {
           deque.pop();
       }

       deque.push(i);
   }

   return result === Infinity ? -1 : result;
};