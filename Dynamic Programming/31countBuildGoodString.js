var countGoodStrings = function(low, high, zero, one) {
    const MOD = 1e9 + 7;
  
    function solve(length) {
       if (length > high) return 0;
  
       let count = 0;
       if (length >= low) count = 1;
  
       const takeZero = solve(length + zero);
       const takeOne = solve(length + one);
  
       return (count + takeZero + takeOne) % MOD;
    }  
    return solve(0);
  };
  
// buttom up
var countGoodStrings = function(low, high, zero, one) {
    const MOD = 1e9 + 7;
  
    let dp = new Array(high + 1).fill(0);
      dp[0] = 1;
      let result = 0;
      for (let i = 1; i <= high; i++) {
          if (i >= zero) {
              dp[i] = (dp[i] + dp[i - zero]) % MOD;
          }
          if (i >= one) {
              dp[i] = (dp[i] + dp[i - one]) % MOD;
          }
          if (i >= low) {
              result = (result + dp[i]) % MOD;
          }
      }
      return result;
  };