var minDepth = function(root) {
    if(!root) return 0;

    if(!root.left) return 1 + minDepth(root.right);
    if(!root.right) return 1 + minDepth(root.left);
    
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};


// BFS

var minDepth = function(root) {
    if(!root) return 0;

    let queue = [root];
    let depth = 0;

    while(queue.length){
        depth++;
        let size = queue.length;

        for(let i=0; i< size; i++){
             let node = queue.shift();

             // If it's a leaf node → return immediately
             if(!node.left && !node.right){
                return depth;
             }
             if(node.left) queue.push(node.left);
             if(node.right) queue.push(node.right);
        }
    }
};