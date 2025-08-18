// let input = [1, 2, 3, 2, 1, 4];
// o/p = [3,4];
// Single Number III
var singleNumber = function(nums) {
    let result = [];
    let obj = {};

    for(let i =0; i< nums.length; i++){
       let ch = nums[i];
       obj[ch] = (obj[ch] || 0)+1;
    }
    for(let ch in obj){
       if(obj[ch] === 1){
           result.push(parseInt(ch));
       }
    }
    return result;
};

// optimise with linear time and constant space
var singleNumber = function(nums) {
    let xor = 0;
    for (let num of nums) {
        xor ^= num;
    }
    let mask = xor & -xor;

    let num1 = 0, num2 = 0;

    for (let num of nums) {
        if ((num & mask) !== 0) {
            num1 ^= num;
        } else {
            num2 ^= num;
        }
    }

    return [num1, num2];
};