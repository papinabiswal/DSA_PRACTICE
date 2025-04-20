var numSubseq = function(nums, target) {
    let n = nums.length;
    let l=0, r = n-1;

    let result =0;

    nums.sort((a,b)=> a-b);
    while(l <= r){
       if(nums[l] + nums[r] <= target){
           result += Math.pow(2, r-l);
           l++;
       } else{
        r--;
       }
       
    }
    return result;
};

// for higher value calculate pow earlier
var numSubseq = function(nums, target) {
    let n = nums.length;
    let l=0, r = n-1;

    let result =0;
    let mod = 1e9+7

    nums.sort((a,b)=> a-b);
    let pow2 = new Array(n).fill(1);
    for(let i=1; i< n; i++){
        pow2[i] = (pow2[i-1] * 2) % mod;
    }
    while(l <= r){
       if(nums[l] + nums[r] <= target){
           result = (result + pow2[r-l]) % mod
           l++;
       } else{
        r--;
       }
       
    }
    return result;
};