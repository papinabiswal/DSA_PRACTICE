// it's same as LIS. just change the condition
// o(n^2) time complexity
// o(n) space complexity
var longestObstacleCourseAtEachPosition = function(obstacles) {
    let n = obstacles.length

   let dp = new Array(n).fill(1); 


   for(let i=0; i< n; i++){
      for(let j=0; j< i; j++){
       if(obstacles[j] <= obstacles[i]) {
          dp[i] = Math.max(dp[i], 1+dp[j]); 
       }

     }
 }
 return dp;
};

// o(nlogn) time complexity     
// patience sorting
var longestObstacleCourseAtEachPosition = function(obstacles) {
    const n = obstacles.length;
  const result = new Array(n).fill(1);
  const stack = [];
  
  for (let i = 0; i < n; i++) {
    const height = obstacles[i];
    let left = 0;
    let right = stack.length;
    
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (stack[mid] <= height) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    
    if (left < stack.length) {
      stack[left] = height;
    } else {
      stack.push(height);
    }
    
    result[i] = left + 1;
  }
  
  return result;
};