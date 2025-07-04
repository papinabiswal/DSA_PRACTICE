var numIdenticalPairs = function(nums) {
    let result =0;
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j< nums.length; j++){
            if(nums[i] === nums[j]){
                result++;
            }

        }
    }
    return result;
};

//optimised
var numIdenticalPairs = function(nums) {
    let result =0;
    let map = new Map();
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for(let count of map.values()){
        result += (count* (count-1))/2
    }
    return result;
};

// without traversing map again
var numIdenticalPairs = function(nums) {
    let result = 0;
    const map = new Map();

    for (let num of nums) {
        result += map.get(num) || 0;
        map.set(num, (map.get(num) || 0) + 1);
    }

    return result;
};
