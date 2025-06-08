// 1. Initialize a queue for BFS.
// 2. Start with the root node.
// 3. For each level, add the last node's

var rightSideView = function(root) {
    if(!root) return [];
     let queue =[root];
     let result =[];

     while(queue.length > 0){
        let n = queue.length;
        let rightNode = null;

       for(let i=0; i< n; i++){
            rightNode = queue.shift();
            if(rightNode.left) queue.push(rightNode.left);
            if(rightNode.right) queue.push(rightNode.right);
       }
       result.push(rightNode.val);
     }
     return result;
};