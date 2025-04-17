var maximumSubarraySum = function(nums, k) {
    let i = 0, j = 0;
    let result = 0;
    let currWindowSum = 0;
    let st = new Set(); // A set to track the distinct elements in the current window

    while (j < nums.length) {
        // Adjust the window if nums[j] is already in the set
        while (st.has(nums[j])) {
            currWindowSum -= nums[i];
            st.delete(nums[i]);
            i++;
        }

        // Add the current element to the window
        currWindowSum += nums[j];
        st.add(nums[j]);

        // Check if the window size is equal to k
        if (j - i + 1 === k) {
            result = Math.max(result, currWindowSum);

            // Shrink the window from the left
            currWindowSum -= nums[i];
            st.delete(nums[i]);
            i++;
        }

        j++;
    }

    return result;
};