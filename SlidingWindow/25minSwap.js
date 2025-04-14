var minSwaps = function(nums) {
    const n = nums.length;
      const countOnes = nums.reduce((sum, val) => sum + val, 0);
  
      let i = 0;
      let j = 0;
      let currCount = 0;
      let maxCount = 0;
  
      while (j < 2 * n) {
          if (nums[j % n] === 1) {
              currCount++;
          }
  
          if (j - i + 1 > countOnes) {
              if (nums[i % n] === 1) {
                  currCount--;
              }
              i++;
          }
  
          maxCount = Math.max(maxCount, currCount);
          j++;
      }
  
      return countOnes - maxCount;  
  };