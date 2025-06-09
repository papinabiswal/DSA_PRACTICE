// DFS
var isSameTree = function(p, q) {
    if(!p && !q) return true;

    if(!p || !q) return false;

    if(p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// BFS
var isSameTree = function(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;

    const queue1 = [p];
    const queue2 = [q];

    while (queue1.length && queue2.length) {
        const node1 = queue1.shift();
        const node2 = queue2.shift();

        if (node1.val !== node2.val) return false;

        // Compare left children
        if (node1.left && node2.left) {
            queue1.push(node1.left);
            queue2.push(node2.left);
        } else if (node1.left || node2.left) {
            return false;
        }

        // Compare right children
        if (node1.right && node2.right) {
            queue1.push(node1.right);
            queue2.push(node2.right);
        } else if (node1.right || node2.right) {
            return false;
        }
    }

    return queue1.length === 0 && queue2.length === 0;
};
