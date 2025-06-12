var buildTree = function(inorder, postorder) {
    let idx = postorder.length-1;

    function solve(start, end){
         if(start > end) return null;

         let rootVal = postorder[idx];
         let i = start;

         while(i <= end && inorder[i] !== postorder[idx]){
            i++;
         }
         idx--;
         const root = new TreeNode(rootVal);
         
         root.right = solve(i+1, end);
         root.left = solve(start, i-1);
         

         return root;
    }
    return solve(0, postorder.length-1);
};