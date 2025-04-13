var maxSlidingWindow = function(nums, k) {
    let result =[];
    let deque =[];

    for(let i=0; i< nums.length; i++){
       // Remove elements out of the current window from the front
        if (deque.length && deque[0] <= i - k) {
            deque.shift();
        }

        // Remove all elements smaller than current from the back
        while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        // Add current index to the deque
        deque.push(i);

        // Start adding max to result after the first k - 1 elements
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
    }

maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3);
