function addOneRow(root, val, depth) {
    if (depth === 1) {
        const newRoot = new TreeNode(val);
        newRoot.left = root;
        return newRoot;
    }

    function add(node, val, depth, curr) {
        if (!node) return null;

        if (curr === depth - 1) { 
            const lTemp = node.left;  // store the node left val in temp
            const rTemp = node.right;

            node.left = new TreeNode(val); // add the new val.
            node.right = new TreeNode(val);

            node.left.left = lTemp; // add the temp val after new node
            node.right.right = rTemp;
        }

        node.left = add(node.left, val, depth, curr + 1);
        node.right = add(node.right, val, depth, curr + 1);

        return node;
    }

    return add(root, val, depth, 1);
}
