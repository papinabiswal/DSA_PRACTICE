var jump = function(nums) {
    let jumps =0;
    let currentEnd =0;
    let maxEnd = 0;

    for(let i=0; i< nums.length-1; i++){
        maxEnd = Math.max(maxEnd, i+ nums[i]);

        if(i === currentEnd){
            jumps++;
            currentEnd = maxEnd;
        }
    }
    return jumps;
};