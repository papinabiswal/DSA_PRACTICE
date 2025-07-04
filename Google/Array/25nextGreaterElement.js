var nextGreaterElement = function(nums1, nums2) {
    let nextGreaterElem = new Map();
    let stack = [];

    for(let num of nums2){
        while(stack.length && stack[stack.length-1] < num){
            let smaller = stack.pop();
            nextGreaterElem.set(smaller, num);
        }
        stack.push(num);
    }

    while(stack.length){
        nextGreaterElem.set(stack.pop(), -1);
    }
    return nums1.map(num=> nextGreaterElem.get(num));
};

// next greater element 2
var nextGreaterElements = function(nums) {
    const n = nums.length;
    const result = new Array(n).fill(-1);
    const stack = [];

    for (let i = 0; i < 2 * n; i++) {
        const current = nums[i % n];

        while (stack.length && nums[stack[stack.length - 1]] < current) {
            const index = stack.pop();
            result[index] = current;
        }

        if (i < n) {
            stack.push(i);
        }
    }

    return result;
};
nextGreaterElements([5,4,3,2,1]);