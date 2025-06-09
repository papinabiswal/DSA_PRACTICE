var maxProduct = function(root) {
    const MOD = 1e9 + 7;
    let totalSum = 0;
    let maxP = 0;

    // First pass: find the total sum of the tree
    function computeTotalSum(node) {
        if (!node) return 0;
        return node.val + computeTotalSum(node.left) + computeTotalSum(node.right);
    }

    // Second pass: compute max product by considering every possible split
    function computeSubtreeSum(node) {
        if (!node) return 0;
        
        const left = computeSubtreeSum(node.left);
        const right = computeSubtreeSum(node.right);
        const currSum = node.val + left + right;

        const product = currSum * (totalSum - currSum);
        maxP = Math.max(maxP, product);

        return currSum;
    }

    totalSum = computeTotalSum(root);
    computeSubtreeSum(root);

    return maxP % MOD;
};
