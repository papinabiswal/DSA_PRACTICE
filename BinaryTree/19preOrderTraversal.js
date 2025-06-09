// 144. Binary Tree Preorder Traversal
// PLR- > Print, Left, Right

var preorderTraversal = function(root) {
    let result =[];

    function preOrder(node){
        if(!node) return result;

        result.push(node.val);
        preOrder(node.left);
        preOrder(node.right);
    }
    preOrder(root);
    return result;
};

// 145. Binary Tree Postorder Traversal
// LRV -> Left, Right, Print

var postorderTraversal = function(root) {
    let result =[];

    function postOrder(node){
        if(!node) return result;

        postOrder(node.left);
        postOrder(node.right);
        result.push(node.val);
    }
    postOrder(root);
    return result;
};

// 94. Binary Tree Inorder Traversal
// LPR -> Left, Print, Right

var inorderTraversal = function(root) {
    let result =[];

    function inOrder(node){
        if(!node) return result;

        inOrder(node.left);
        result.push(node.val);
        inOrder(node.right);
    }
    inOrder(root);
    return result;
};

// 102. Binary Tree Level Order Traversal

// BFS

var levelOrder = function(root) {
    if(!root) return [];
    let result = [];
    let queue = [root];
    while(queue.length){ // queue is not empty
        let level = [];
        let size = queue.length;
        for(let i = 0; i < size; i++){
            let node = queue.shift();
            level.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        result.push(level);
    }
    return result;
};