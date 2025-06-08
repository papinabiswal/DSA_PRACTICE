// take root from preorder
// take left and right from inorder


var buildTree = function(preorder, inorder) {
    let idx = 0;

    function solve(start, end){
       if (start > end) return null;

        const rootVal = preorder[idx];
        let i = start;

        // Find the index of rootVal in inorder
        while (i <= end && inorder[i] !== rootVal) {
            i++;
        }

        idx++;
        const root = new TreeNode(rootVal);

        root.left = solve(start, i - 1);
        root.right = solve(i + 1, end);

        return root;

    }

    return solve(0, preorder.length-1)
};