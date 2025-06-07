// 1. Perform in-order traversal to get sorted values.
// 2. Use the sorted array to construct a balanced BST.
// 3. Recursively find the middle element and make it root.

// TC: O(n) for in-order traversal + O(n) for constructing the tree = O(n)
// SC: O(n) for storing in-order values + O(log n) for recursion stack = O(n)
var balanceBST = function(root) {
    let result =[];

   // do inorder traversal to get the value in sorted fashion
   const inOrder = function(node){
       if(!node) return null;
       inOrder(node.left);
       result.push(node.val);
       inOrder(node.right);
   } 

   // Step 2: Reconstruct balanced BST from sorted array
   // find the mid, make it root. then make left and right node
    const construct = (l, r) => {
        if(l > r) return null;

        let mid = Math.floor((l+r)/2);
        const node = new TreeNode(result[mid]);

        node.left = construct(l, mid-1);
        node.right = construct(mid+1, r);
        return node;
    }

   inOrder(root);
   return construct(0, result.length-1)
};