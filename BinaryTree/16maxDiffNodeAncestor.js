//bruteforce
var maxAncestorDiff = function(root) {
    let maxDiff = -Infinity;

    function findMaxUtil(root, child) {
        if (!root || !child) return;

        maxDiff = Math.max(maxDiff, Math.abs(root.val - child.val));

        // go deeper from the child
        findMaxUtil(root, child.left);
        findMaxUtil(root, child.right);
    }

    function findMaxDiff(root) {
        if (!root || (!root.left && !root.right)) return;

        findMaxUtil(root, root.left);
        findMaxUtil(root, root.right);

        findMaxDiff(root.left);
        findMaxDiff(root.right);
    }

    findMaxDiff(root);
    return maxDiff;
};

// optimized
// take min and max value to root first;
// update the min and max value to the child node;
// calculate the difference between max and min value;

var maxAncestorDiff = function(root) {
    function maxDiff(node, minV, maxV){
        if(!node) return Math.abs(maxV - minV);

        minV = Math.min(minV, node.val);
        maxV = Math.max(maxV, node.val);

        const left = maxDiff(node.left, minV, maxV); // left subtree
        const right = maxDiff(node.right, minV, maxV); // right subtree

        return Math.max(left, right);
    }
    return maxDiff(root, root.val, root.val);
};
