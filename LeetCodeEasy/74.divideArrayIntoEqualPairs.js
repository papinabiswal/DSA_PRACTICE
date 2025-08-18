// direct xor will not work; [2,3,4,5] xor will also be 0;
// so first sort them then check with pair.
// if any pair is not zero return false;
var divideArray = function(nums) {
    nums.sort((a, b) => a - b); // sort the array

    for (let i = 1; i < nums.length; i += 2) {
        if ((nums[i] ^ nums[i - 1]) !== 0) { // check if consecutive pair is same
            return false;
        }
    }
    return true;
};

// you can do with map, set and constant space as well
var divideArray = function(nums) {
    // fixed range assumption from problem constraints
    let freq = new Array(501).fill(0); 

    // count frequency
    for (let num of nums) {
        freq[num]++;
    }

    // check if all counts are even
    for (let count of freq) {
        if (count % 2 !== 0) {
            return false;
        }
    }
    return true;
};