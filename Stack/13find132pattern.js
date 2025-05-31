// 1. Traverse from right to left (i = n-1 to 0):
// 2. If nums[i] < second => pattern found.
// 3. While stack not empty and nums[i] > stack.top():
//    - Pop stack and update `second = popped` (as nums[k])
// 4. Push nums[i] into stack (potential nums[j])
// 5. If loop ends, return false (no 132 pattern found)

var find132pattern = function(nums) {
    let stack = [];
    let second = -Infinity;

    for(let i = nums.length-1; i>=0; i--){
       if(nums[i] < second) return true;

       while(stack.length && nums[i] > stack[stack.length-1]){
            second = stack.pop();
       }
       stack.push(nums[i]);
    }
    return false;
};
// Time: O(n)
// Space: O(n)