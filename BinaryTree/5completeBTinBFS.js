var isCompleteTree = function(root) {
    let queue = [root];
    let seenNull = false;

    while (queue.length > 0) {
        let node = queue.shift();

        if (node === null) {
            seenNull = true;
        } else {
            if (seenNull) {
                return false; // Found a non-null after a null, not complete
            }

            queue.push(node.left);
            queue.push(node.right);
        }
    }

    return true;
};
