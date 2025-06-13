var maxLevelSum = function(root) {
    if(!root) return 0;
    let currentLevel =1;
    let maxSum = -Infinity;
    let resultLevel = 0;

    let queue = [root];
    while(queue.length > 0){
       let n = queue.length;
       let sum =0;

       for(let i=0; i< n; i++){
            let node = queue.shift();

            sum += node.val;
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
       }
       if(sum > maxSum){
          maxSum = sum;
          resultLevel = currentLevel
       }
       currentLevel++;
    }
    return resultLevel;
};