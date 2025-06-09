// The inOrder function returns a string representing the leaf sequence.

// For leaf nodes, it returns the leaf value plus an underscore.

// For non-leaf nodes, it concatenates the results from the left and right subtree.

// Finally, s1 and s2 hold the full leaf sequences for both trees and are compared.
var leafSimilar = function(root1, root2) {
    function inOrder(node) {
            if (!node) return "";
            if (!node.left && !node.right) {
                return node.val + "_";
            }
            return inOrder(node.left) + inOrder(node.right);
        }

        let s1 = inOrder(root1);
        let s2 = inOrder(root2);

        return s1 === s2;
};