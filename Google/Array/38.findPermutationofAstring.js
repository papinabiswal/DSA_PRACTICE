function permuteString(s) {
    const res = [];
    const chars = s.split("");   // convert string to array

    function backtrack(start) {
        if (start === chars.length) {
            res.push(chars.join(""));  // convert back to string
            return;
        }

        for (let i = start; i < chars.length; i++) {
            [chars[start], chars[i]] = [chars[i], chars[start]];
            backtrack(start + 1);
            [chars[start], chars[i]] = [chars[i], chars[start]]; // undo
        }
    }

    backtrack(0);
    return res;
}


// permutation of a number 
var permute = function(nums) {
    const res = [];
    
    function backtrack(start){
       if(start === nums.length){
          res.push([...nums]);
          return;
       }

       for(let i = start; i< nums.length; i++){
          [nums[start], nums[[i]]] = [nums[i], nums[start]];
          backtrack(start+1);
          [nums[start], nums[[i]]] = [nums[i], nums[start]];
       }
    }
    backtrack(0);
    return res;
};