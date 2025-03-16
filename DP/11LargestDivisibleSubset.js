// Recursion

var largestDivisibleSubset = function(nums) {
    nums.sort((a,b)=> a-b);
    let result =[];

    function solve(idx, temp, prev){
       if(idx >= nums.length){
          if(temp.length > result.length){
            result = [...temp];
          }
          return;
       }

       if(prev === -1 || nums[idx] % prev === 0){
            temp.push(nums[idx]);
            solve(idx+1, temp, nums[idx]);
            temp.pop();
       }
       solve(idx+1, temp, prev);

    }
    solve(0, [], -1);
    return result;
};

// Buttom up approach
var largestDivisibleSubset = function(nums) {
    nums.sort((a, b) => a - b)

    const dp = Array(nums.length).fill(1)
    const prev = Array(nums.length).fill(-1)
    let maxIndex = 0

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0 && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1
                prev[i] = j
            }
        }
        if (dp[i] > dp[maxIndex])
            maxIndex = i
    }

    const result = []
    while (maxIndex !== -1) {
        result.unshift(nums[maxIndex])
        maxIndex = prev[maxIndex]
    }

    return result
};