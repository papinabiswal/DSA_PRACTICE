// https://www.geeksforgeeks.org/problems/next-larger-element-1587115620/1
function nextLargerElement(arr) {
    let stack =[];
    let result = new Array(arr.length).fill(-1);
    for(let i= arr.length-1; i >= 0;  i--){
        while(stack.length && stack[stack.length-1] <= arr[i]){
           stack.pop();
        }
        if(stack.length > 0){
            result[i] = stack[stack.length-1];
        }
        stack.push(arr[i]);
    }
     return result;
}
nextLargerElement([1, 3, 2, 4]);

// next greater element 2
var nextGreaterElements = function(nums) {
    const n = nums.length;
    const result = new Array(n).fill(-1);
    const stack = [];

    for (let i = 2 * n - 1; i >= 0; i--) {
        const index = i % n;

        // Pop smaller or equal elements
        while (stack.length > 0 && stack[stack.length - 1] <= nums[index]) {
            stack.pop();
        }

        // If stack is not empty, this is the next greater
        if (stack.length > 0) {
            result[index] = stack[stack.length - 1];
        }

        // Push current element into stack
        stack.push(nums[index]);
    }

    return result;
};
nextGreaterElements([5,4,3,2,1]);