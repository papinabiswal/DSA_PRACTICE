var distanceK = function(root, target, k) {
    const parent = new Map();
    const result = [];

    // Step 1: Build parent references using DFS
    function addParent(node) {
        if (!node) return;

        if (node.left) {
            parent.set(node.left, node);
            addParent(node.left);
        }
        if (node.right) {
            parent.set(node.right, node);
            addParent(node.right);
        }
    }

    // Step 2: BFS to collect nodes at distance K
    function collectKDistanceNodes(targetNode, k) {
        const queue = [targetNode];
        const visited = new Set();
        visited.add(targetNode);

        while (queue.length > 0) {
            let size = queue.length;
            if (k === 0) break;

            for (let i = 0; i < size; i++) {
                const curr = queue.shift();

                if (curr.left && !visited.has(curr.left)) {
                    visited.add(curr.left);
                    queue.push(curr.left);
                }
                if (curr.right && !visited.has(curr.right)) {
                    visited.add(curr.right);
                    queue.push(curr.right);
                }

                const par = parent.get(curr);
                if (par && !visited.has(par)) {
                    visited.add(par);
                    queue.push(par);
                }
            }

            k--;
        }

        while (queue.length > 0) {
            result.push(queue.shift().val);
        }
    }

    addParent(root);
    collectKDistanceNodes(target, k);

    return result;
};
