// Find Leaves of Binary Tree Grouped by Height

// calculate height in a binary tree;
// store the heightvalue in a map with height: [val]
// loop in map, push the value in a result .

function findLeaves(root) {
    let heightMap = new Map();
    let maxHeight =0;
    let result= [];

    function calculateHeight(node){
        if(!node) return 0;
        
        const leftHeight = calculateHeight(node.left);
        const rightHeight = calculateHeight(node.right);

        const height = 1 + Math.max(leftHeight, rightHeight);

        if(!heightMap.has(height)){
            heightMap.set(height, []);
        }
        heightMap.get(height).push(node.val);
        maxHeight = Math.max(maxHeight, height);

        return height;
    }
    calculateHeight(root);

    for(let i=1; i<= maxHeight; i++){
        result.push(heightMap.get(i))
    }
    return result;
}
