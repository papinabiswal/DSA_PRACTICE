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
 function formatRange(start, end) {
    return start === end ? `${start}` : `${start}->${end}`;
}

 var findMissingRanges = function(nums, lower, upper) {
    const result = [];
    let prev = lower - 1;

    for (let i = 0; i <= nums.length; i++) {
        let curr = (i < nums.length) ? nums[i] : upper + 1;

        if (curr - prev >= 2) {
            result.push(formatRange(prev + 1, curr - 1));
        }

        prev = curr;
    }

    return result;
};
findMissingRanges([0, 1, 3, 50, 75], 0, 99)

