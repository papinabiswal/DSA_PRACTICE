// TC: O(N)
// SC: O(K) --> The result array stores (n - k + 1) time sliding window.
var maxSlidingWindow = function(nums, k) {
    let res = [];
    let queue = [];


    for(let i =0; i< nums.length; i++){
        let num = nums[i];

        while(queue.length && queue[queue.length-1] < num){
            queue.pop();
        }
        queue.push(num);

        if(i >= k && nums[i-k] === queue[0]){
             queue.shift();
        }

        if(i >= k-1){
            res.push(queue[0]);
        }
    }
    return res;
};

maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3);
