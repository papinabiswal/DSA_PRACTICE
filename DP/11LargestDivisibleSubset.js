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
    nums.sort((a,b)=> a-b);
    let dp = new Array(nums.length).fill(1);
    let prev = new Array(nums.length).fill(-1);
    let n = nums.length;

    let maxLIS = 1;
    let last_choosen_idx = 0;

    for(let i= 1; i< n; i++){
       for(let j=0; j< i; j++){
           if(nums[i] % nums[j] === 0){
              if(dp[i] < 1+dp[j]){
                   dp[i] = 1 + dp[j];
                   prev[i] = j;
              }

              if(maxLIS < dp[i]){
                  maxLIS = dp[i];
                  last_choosen_idx = i;
              }
           }
       }
    }

    let result = [];
    while(last_choosen_idx !== -1){
       result.push(nums[last_choosen_idx]);
       last_choosen_idx = prev[last_choosen_idx];
    }
    return result;
};