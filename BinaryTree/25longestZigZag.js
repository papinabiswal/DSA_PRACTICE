var longestZigZag = function(root) {
    let maxPath =0;

    function dfs(node, goLeft, steps){
        if(!node) return;

        maxPath = Math.max(maxPath, steps);

        if(goLeft){
           dfs(node.left, false, steps+1);
           dfs(node.right, true, 1); 
        } else {
             dfs(node.right, true, steps+1); 
             dfs(node.left, false, 1); 
        }
    }
    dfs(root, false, 0);  // go right
    dfs(root, true, 0);   // go left

    return maxPath;
};

// Approach 2
var longestZigZag = function(root) {
    let maxPath = 0;

    function solve(node, left, right) {
        if (!node) return;

        maxPath = Math.max(maxPath, left, right);

        // If we go left, we came from right
        solve(node.left, right + 1, 0);

        // If we go right, we came from left
        solve(node.right, 0, left + 1);
    }

    solve(root, 0, 0);
    return maxPath;
};
