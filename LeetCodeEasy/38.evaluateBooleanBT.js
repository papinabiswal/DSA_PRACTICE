var evaluateTree = function(root) {
    if(!root.left && !root.right){
        return root.val;
    }
    let a = evaluateTree(root.left);
    let b = evaluateTree(root.right);

    if(root.val === 2) {
        return a | b;
    } else if(root.val === 3){
        return a && b
    }
    return null;
};