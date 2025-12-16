// TC: O(N), SC: O(N)

var largestRectangleArea = function(heights) {
    let n = heights.length;
    let left = new Array(n);
    let right = new Array(n);

    // 1️⃣ Find Left Smaller Element
    let stack = [];
    for (let i = 0; i < n; i++) {
        while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }
        left[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
        stack.push(i);
    }

    // 2️⃣ Find Right Smaller Element
    stack = [];
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }
        right[i] = stack.length === 0 ? n : stack[stack.length - 1];
        stack.push(i);
    }

    // 3️⃣ Find max area
    let maxArea = 0;
    for (let i = 0; i < n; i++) {
        let height = heights[i];
        let width = right[i] - left[i] - 1;
        maxArea = Math.max(maxArea, height * width);
    }

    return maxArea;
};
