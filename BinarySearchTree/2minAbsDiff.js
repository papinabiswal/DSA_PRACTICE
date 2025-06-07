// In-order traversal of a BST gives sorted values.

// You compare each node’s value with the previous visited node’s value.

// Track the minimum difference during traversal.

var getMinimumDifference = function(root) {
    let minDiff = Infinity;
    let prev = null;

    function inOrder(node){
      if(!node) return;
        
        inOrder(node.left);
        if(prev !== null){
           minDiff = Math.min(minDiff, node.val - prev.val);
        }
        prev = node;
        inOrder(node.right);
    }
    inOrder(root);
    return minDiff;
};