var rightSideView = function(root) {
    let result = [];

    function preOrder(node, level){
        if(!node) return null;
        
        if(result.length < level){
            result.push(node.val);
        }

        preOrder(node.right, level + 1);
        preOrder(node.left, level + 1);

    }
    preOrder(root, 1);
    return result;
}