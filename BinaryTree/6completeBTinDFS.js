// O(n2)
function pruneTree(root) {
    if (!root) return null;

    // Helper function to check if any node in the subtree contains a 1
    function checkOne(node) {
        if (!node) return false;
        if (node.val === 1) return true;
        return checkOne(node.left) || checkOne(node.right);
    }

    // If left or right subtree does not contain 1, prune them
    if (!checkOne(root.left)) root.left = null;
    if (!checkOne(root.right)) root.right = null;

     // Recursively prune left and right subtrees
     root.left = pruneTree(root.left);
     root.right = pruneTree(root.right);

    // If current node becomes a leaf and has value 0, prune it
    if (!root.left && !root.right && root.val === 0) return null;

    return root;
}

// O(n)

var pruneTree = function(root) {
    if (!root) return null;

    root.left = pruneTree(root.left);
    root.right = pruneTree(root.right);

    if (!root.left && !root.right && root.val === 0) {
        return null;
    }

    return root;
};
