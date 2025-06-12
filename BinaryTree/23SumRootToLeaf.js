var sumNumbers = function(root) {
    
    function solve(node, curr){
        if(!node) return 0;

         curr = curr * 10 + node.val;
        if(!node.left && !node.right) {
            return curr;
        }

        let leftSum = solve(node.left, curr);
        let rightSum = solve(node.right, curr);

        return leftSum + rightSum;
    }
    return solve(root, 0);
};