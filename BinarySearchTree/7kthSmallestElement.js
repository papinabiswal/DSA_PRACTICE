var kthSmallest = function(root, k) {
    let count =0;
    let result = null;
    
    function inOrder(node){
        if(!node) return null;

        inOrder(node.left);
        count++;
        if(count === k) result = node.val;
        inOrder(node.right);
    }
    inOrder(root);
    return result;
};