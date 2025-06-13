var minDepth = function(root) {
    if (!root) return 0;

    // If it's a leaf node
    if (!root.left && !root.right) return 1;

    let left = root.left ? minDepth(root.left) : Infinity;
    let right = root.right ? minDepth(root.right) : Infinity;

    return 1 + Math.min(left, right);
};


// BFS

var minDepth = function(root) {
    if(!root) return 0;

    let queue = [root];
    let level = 1;

    while(queue.length){
        let n= queue.length;

        for(let i=0; i< n; i++){
            let node = queue.shift();

            if(!node.left && !node.right){
                return level;
            }

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        level++;
    }
    return level;
};