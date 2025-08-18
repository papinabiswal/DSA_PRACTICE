var minimumOperations = function(nums) {
    let n = nums.length;
    let st = new Set();

    for (let i = n - 1; i >= 0; i--) {
        if (st.has(nums[i])) {
            return Math.ceil((i + 1) / 3);
        }
        st.add(nums[i]);
    }
    return 0;
};