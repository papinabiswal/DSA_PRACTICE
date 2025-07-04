var majorityElement = function(nums) {
    let n = nums.length;
    let map = new Map();
    for(let num of nums){
       map.set(num, (map.get(num)||0)+1);
    }
    for(let [key,count] of map.entries()){
        if(count > n/2){
           return key;
        }
    }
};

// Boyer-Moore Voting Algorithm
var majorityElement = function(nums) {
    let n = nums.length;
    let count =0;
    let majElem = null;

    for(let num of nums){
       if(count === 0){
           majElem = num;
           count =1;
       } else if(majElem === num){
            count++;
       } else {
          count--;
       }
    }
    return maj;
};

// majority element 2

var majorityElement = function(nums) {
    let count1 = 0, count2 = 0;
    let candidate1 = null, candidate2 = null;

    // First pass: find potential candidates
    for (let num of nums) {
        if (num === candidate1) {
            count1++;
        } else if (num === candidate2) {
            count2++;
        } else if (count1 === 0) {
            candidate1 = num;
            count1 = 1;
        } else if (count2 === 0) {
            candidate2 = num;
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }

    // Second pass: verify actual counts
    count1 = 0;
    count2 = 0;
    for (let num of nums) {
        if (num === candidate1) count1++;
        else if (num === candidate2) count2++;
    }

    const result = [];
    const n = nums.length;
    if (count1 > Math.floor(n / 3)) result.push(candidate1);
    if (count2 > Math.floor(n / 3)) result.push(candidate2);

    return result;
};