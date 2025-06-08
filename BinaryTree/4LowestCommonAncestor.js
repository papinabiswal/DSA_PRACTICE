// If root is null, return null.

// If root.val === p.val or q.val, then root is one of the nodes you're looking for.

// Recur for left and right subtrees:

// If both return non-null, this node is the LCA.

// If only one returns non-null, return that one.

var lowestCommonAncestor = function(root, p, q) {
    if (!root) return null;

    if (root.val === p.val || root.val === q.val) {
        return root;
    }

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if (left && right) return root;

    return left ? left : right;
};
