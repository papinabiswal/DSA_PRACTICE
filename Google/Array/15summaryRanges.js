var summaryRanges = function(nums) {
    let n = nums.length;
     if(n === 0) return [];
     let result =[];
 
     for(let i=0; i<n; i++){
          let start = nums[i];
         while(i+1 < n && nums[i] + 1 === nums[i+1]){
             i++;
         }
         if(nums[i] !== start){
             result.push(`${start}->${nums[i]}`);
         } else {
             result.push(`${start}`);
         }
     }
     return result; 
 };

 //missing ranges
 function missingRange(nums, lower, upper){
    let res = [];
    for(let i=0; i<= nums.length; i++){
        let curr = (i< nums.length) ? nums[i] : upper+1;

        if(lower < curr){
           if(curr -lower === 1){
                res.push(`${lower}`)
           } else {
               res.push(`${lower}->${curr-1}`);
           } 
        }
        lower = curr+1
    }
    return res;
}
missingRange([0, 1, 3, 50, 75], 0, 99);


// missing number best solution
var missingNumber = function(nums) {
    let res = nums.length;
    for(let i=0; i< nums.length; i++){
       res += i-nums[i];
    }
    return res;
};
missingNumber([3,0,1])

