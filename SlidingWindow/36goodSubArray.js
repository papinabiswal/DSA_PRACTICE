var countGood = function(nums, k) {
    let n = nums.length;
      let i = 0, j = 0;
      let result = 0;
      let pairs = 0;
      const freq = {}; // frequency object
  
      while (j < n) {
          // Add existing count of nums[j] to pairs
          if (!freq[nums[j]]) freq[nums[j]] = 0;
          pairs += freq[nums[j]];
  
          // Update frequency
          freq[nums[j]] += 1;
  
          // While we have at least k pairs, count all subarrays (i to n-1)
          while (pairs >= k) {
              result += (n - j);
  
              // Shrink window from left
              freq[nums[i]] -= 1;
              pairs -= freq[nums[i]]; // remove pairs made by nums[i]
              i++;
          }
  
          j++;
      }
  
      return result;  
  };