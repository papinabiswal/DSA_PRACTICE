var maxPathSum = function(root) {
    let maxSum = -Infinity;

    function solve(node) {
        if (!node) return 0;

        const left = solve(node.left);
        const right = solve(node.right);

        const sum_through_root = left + right + node.val; // (1)
        const one_side_max = Math.max(left, right) + node.val; // (2)
        const only_root = node.val; // (3)

        maxSum = Math.max(maxSum, sum_through_root, one_side_max, only_root);

        // Return max path sum for parent call (either go left or right or stay at root)
        return Math.max(one_side_max, only_root);
    }

    solve(root);
    return maxSum;
};
