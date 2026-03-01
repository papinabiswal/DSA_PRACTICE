// count node O(n) time complexity
function countNodes(root) {
    if (!root) return 0;

    return 1 + countNodes(root.left) + countNodes(root.right);
}


// Compute left height → O(h)

// Compute right height → O(h)

// If equal → return 2^h - 1

// Else → recursively solve left and right
// time complexity: O((log n)^2)
// space complexity: O(log n) due to recursion stack
var countNodes = function(root) {
    if(!root) return 0;

    const lh = leftHeight(root); // find perfect left
    const rh = rightHeight(root); // find perfect right

    if(lh === rh) {
        return Math.pow(2, lh) -1; // perfect BT , find num of node 2^n-1;
    }
    return 1+countNodes(root.left) + countNodes(root.right); // add root + left+ right
};

function leftHeight(root) {
    let height = 0;
    while (root) {
        height++;
        root = root.left;
    }
    return height;
}

function rightHeight(root) {
    let height = 0;
    while (root) {
        height++;
        root = root.right;
    }
    return height;
}