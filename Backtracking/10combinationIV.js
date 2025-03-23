var combinationSum4 = function(nums, target) {

    let dp = new Array(target + 1).fill(-1);

    function solve(target) {
        if (target === 0) return 1;
        if (target < 0) return 0;
        if (dp[target] !== -1) return dp[target];

        let ways = 0;
        for (let num of nums) {
            ways += solve(target - num);
        }

        return dp[target] = ways;
    }

    return solve(target);
};

// (4)
// /  |  \
// (3)  (2)  (1)
// / | \  / |   |
// (2)(1)(0)(1)(0)
// / | \  |  
// (1)(0)(0) 
// |
// (0) 

// Combination 3
var combinationSum3 = function(k, n) {
    let result =[];
    function solve(idx, temp, target){
       if(target === 0 && temp.length === k){
          result.push([...temp]);
          return;
       }

       if(idx > 9 || target < 0){
        return ;
       }

       for (let i = idx; i <= 9; i++) {
         temp.push(i);
         solve(idx+1, temp, target-i);
         temp.pop(i);
       }
    }
    solve(1, [], n);
    return result;
};
// (start) solve(1, [], 7)
//                     /        |        |       
//                 [1]         [2]       [3]    
//                /    \        |        
//           [1,2]   [1,3]   [2,3]     
//            /         |       |
//        [1,2,4]    [1,3,5]  [2,3,4]  



// combination 2 
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b)=> a-b);
    let result =[];

    function backtrack(idx, temp, target){
       if(target === 0){
          result.push([...temp]);
          return;
       }

        for (let i = idx; i < candidates.length; i++) {
            if (i > idx && candidates[i] === candidates[i - 1]) continue; 
            if (candidates[i] > target) break;

            temp.push(candidates[i]);
            backtrack(i + 1, temp, target - candidates[i]); // Move to next index (no reuse)
            temp.pop();
        }
    }
    backtrack(0, [], target);
    return result;
};


// combination 1
var combinationSum = function(candidates, target) {
    let result = [];

    function backtrack(idx, temp, target) {
        if (target === 0) {
            result.push([...temp]);
            return;
        }
        if (target < 0) return;

        for (let i = idx; i < candidates.length; i++) {
            temp.push(candidates[i]);
            backtrack(i, temp, target - candidates[i]); // `i` allows reuse
            temp.pop();
        }
    }

    backtrack(0, [], target);
    return result;
};