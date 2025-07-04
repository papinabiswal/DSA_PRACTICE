// Find All Duplicates in an Array
// O(N)
// sc: O(N)
var findDuplicates = function(nums) {
    let obj = {};
    let result = [];

    for(let ch of nums){
      obj[ch] = (obj[ch] || 0) + 1;
    }

    for(let key in obj){
         if(obj[key] > 1){
            result.push(parseInt(key));
         }
    }
    return result;
};

// use number as index
// optimal
var findDuplicates = function(nums) {
    let result =[];

    for(const element of nums){
        let index = Math.abs(element) -1;

        if(nums[index] < 0){
             result.push(Math.abs(element));
        } else {
            nums[index] = -nums[index];
        }
    }
    return result;
};