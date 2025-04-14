var longestSubarray = function(nums, limit) {
    let maxDeque = []; // decreasing deque (to keep track of max)
      let minDeque = []; // increasing deque (to keep track of min)
  
      let i = 0;
      let result = 0;
  
      for (let j = 0; j < nums.length; j++) {
          // maintain decreasing maxDeque
          while (maxDeque.length && nums[j] > maxDeque[maxDeque.length - 1]) {
              maxDeque.pop();
          }
          maxDeque.push(nums[j]);
  
          // maintain increasing minDeque
          while (minDeque.length && nums[j] < minDeque[minDeque.length - 1]) {
              minDeque.pop();
          }
          minDeque.push(nums[j]);
  
          // if condition is violated, shrink window from left
          while (maxDeque[0] - minDeque[0] > limit) {
              if (maxDeque[0] === nums[i]) maxDeque.shift();
              if (minDeque[0] === nums[i]) minDeque.shift();
              i++;
          }
  
          result = Math.max(result, j - i + 1);
      }
  
      return result;
  };