var longestNiceSubarray = function(nums) {
    let i = 0, curr = 0, result = 0;
  
      for (let j = 0; j < nums.length; j++) {
          // While there's a bit overlap (conflict), shrink from the left
          while ((curr & nums[j]) !== 0) {
              curr ^= nums[i]; // Remove nums[i]'s bits from current
              i++;
          }
  
          curr |= nums[j]; // Add nums[j]'s bits
          result = Math.max(result, j - i + 1); // Update longest window
      }
  
      return result;  
  };