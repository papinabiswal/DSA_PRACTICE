var findPermutation = function(nums) {
    let n = nums.length;
   let minSum = Infinity;
   let result = [];
   
   function solve(visited, temp, sum) {
       if (sum >= minSum) return; // Prune unnecessary recursive calls

       if (temp.length === n) {
           sum += Math.abs(nums[temp[temp.length - 1]] - nums[temp[0]]);  // This line adds the absolute difference between the last visited house and the first house to the total sum
           if (sum < minSum) {
               minSum = sum;
               result = [...temp]; // Store the best permutation found
           }
           return;
       }

       for (let i = 0; i < n; i++) {
           if (!visited[i]) {
               visited[i] = true;
               temp.push(i);
               //  updates the sum while making a move to a new house.
               solve(visited, temp, sum + Math.abs(nums[temp[temp.length - 2]] - nums[i]));
               temp.pop();
               visited[i] = false;
           }
       }
   }

   let visited = new Array(n).fill(false);
   let temp = [0]; // Start lexicographically from 0
   visited[0] = true;

   solve(visited, temp, 0);
   return result;
};