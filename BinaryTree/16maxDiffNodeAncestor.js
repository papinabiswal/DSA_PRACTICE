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
    
    let maxDiff = 0
     function repeat(node, minVal, maxVal) {
         if (!node) return 

         minVal = Math.min(minVal, node.val)
         maxVal = Math.max(maxVal, node.val)

         maxDiff = Math.max(maxDiff, Math.abs(maxVal - minVal))
         
         repeat(node.left, minVal, maxVal)
         repeat(node.right, minVal, maxVal)
     }
     repeat(root, root.val, root.val)
     return maxDiff
 };
