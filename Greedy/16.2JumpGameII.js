// - Initialize jump count, currEnd, maxEnd to 0
// - Iterate from i=0 to second last index:
//     - Update maxEnd = max(maxEnd, i + nums[i])
//     - If i == currEnd (end of current jump range):
//         - jump++ (make a jump)
//         - currEnd = maxEnd (update range boundary)
// - Return total jump count

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


// jump game 1
// 55. Jump Game

// - Track the farthest index you can jump to using `maxReach`.
// - For each index `i`:
//    - If `i` > `maxReach` → stuck → return false
//    - Else update `maxReach = max(maxReach, i + nums[i])`
//    - If `maxReach >= last index` → return true
// - If loop ends, return true

var canJump = function(nums) {
    let maxReach =0;

    for(let i=0; i< nums.length; i++){
        if(i > maxReach) return false;

        maxReach = Math.max(maxReach, i+ nums[i]);

        if(maxReach >= nums.length-1) return true;
    }
    return true
};