// story points

var pathSum = function(root, targetSum) {
    const result =[];
    let temp =[];

    function collectPath(node, target){
       if(!node) return;

       temp.push(node.val);
       if(!node.left && !node.right && node.val === target){
          result.push([...temp]);
       }
       
       collectPath(node.left, target-node.val);
       collectPath(node.right, target-node.val);

       temp.pop();

    }
    collectPath(root, targetSum);
    return result;
};