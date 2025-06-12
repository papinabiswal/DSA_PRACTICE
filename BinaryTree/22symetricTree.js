var isSymmetric = function(root) {
    if(!root) return true;
    
    function check(left, right){
         if(!left && !right) return true;
         if(!left || !right) return false;

         return (
            left.val === right.val &&
            check(left.left, right.right) &&
            check(left.right, right.left)
         )
    }
    return check(root.left, root.right);
};