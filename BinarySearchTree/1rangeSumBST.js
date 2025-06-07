// 1. If root is null, return 0.
// 2. If value in [low, high] → include and go both sides.
// 3. If value < low → discard left, go right.
// 4. If value > high → discard right, go left.

var rangeSumBST = function(root, low, high) {
    if (!root) return 0;

    // Within range: add root's value and recurse both left and right
    if (root.val >= low && root.val <= high) {
        return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
    }

    // If value is less than low, skip left subtree
    if (root.val < low) {
        return rangeSumBST(root.right, low, high);
    }

    // If value is greater than high, skip right subtree
    return rangeSumBST(root.left, low, high);
};
