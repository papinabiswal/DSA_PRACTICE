// Total no of nodes
// DFS -> Left child = 2*i, right child = 2*i+1; 
// to number each node. 
// if index > nodecount return false;

function isCompleteTree(root) {
    if (!root) return true;

    let totalNodes = 0;
    const countNodes = (node) => {
        if (!node) return 0;
        return 1 + countNodes(node.left) + countNodes(node.right);
    };
    totalNodes = countNodes(root);

    const dfs = (node, i) => {
        if (!node) return true;
        if (i > totalNodes) return false;
        return dfs(node.left, 2 * i) && dfs(node.right, 2 * i + 1);
    };

    return dfs(root, 1);
}

