// 1. Traverse the tree in reverse in-order (Right → Root → Left).
// 2. Use a running variable `sum` to keep track of total so far.
// 3. Update each node's value to `sum` during traversal.
// 4. Recursively process the entire tree.

var bstToGst = function(root) {
    let sum = 0;

    const solve = (node) => {
        if (!node) return;

        // Traverse right subtree first (larger values)
        solve(node.right);

        // Update sum and current node value
        sum += node.val;
        node.val = sum;

        // Traverse left subtree
        solve(node.left);
    };

    solve(root);
    return root;
};
