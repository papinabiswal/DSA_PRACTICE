var findMaxK = function(nums) {
    let res = -1;
    let numSet = new Set(nums);

    for(let num of numSet){
       if(numSet.has(-num)){
          res = Math.max(res, num);
       }
    }
    return res;
};