// brute force
var missingNumber = function(nums) {
    for(let i =0; i<= nums.length; i++){
        if(!nums.includes(i)){
            return i;
        }
    }
    return i+1;
};

// mathmatical
// when we know 0 to n , how to find the sum n(n+1)/2;
var missingNumber = function(nums) {
    let n = nums.length;
    let numsum = Math.floor((n*(n+1))/2);
    let sum = 0;
    for(let i =0; i< nums.length; i++){
        sum += nums[i];
    }
    return numsum-sum;
};

// do with xor, match index with value. because value will 0 to n and index will be also 0 to n.
var missingNumber = function(nums) {
    let res = nums.length;
    for(let i=0; i< nums.length; i++){
       res += i-nums[i]; 
    }
    return res;
};

// Binary Search
var missingNumber = function(nums) {
    nums.sort((a,b)=>a-b);

    let left =0, right= nums.length;
    while(left < right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid] > mid){
            right = mid
        } else {
            left = mid+1;
        }
    }
    return left;
};