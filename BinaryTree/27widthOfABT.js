var widthOfBinaryTree = function(root) {
    if (!root) return 0;

    let maxWidth = 0;
    let queue = [[root, 0]];

    while (queue.length > 0) {
        let n = queue.length;
        let leftIdx = queue[0][1];
        let rightIdx = queue[queue.length - 1][1];
        maxWidth = Math.max(maxWidth, rightIdx - leftIdx + 1);

        for (let i = 0; i < n; i++) {
            let [node, idx] = queue.shift();

            // Normalize index to avoid large numbers
            let normalizedIdx = idx - leftIdx;

            if (node.left) {
                queue.push([node.left, 2 * normalizedIdx + 1]);
            }
            if (node.right) {
                queue.push([node.right, 2 * normalizedIdx + 2]);
            }
        }
    }

    return maxWidth;
};
