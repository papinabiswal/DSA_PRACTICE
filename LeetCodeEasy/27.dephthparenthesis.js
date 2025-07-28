var maxDepth = function(s) {
    let stack = [];
    let maxCount = 0;
    for(let i =0; i< s.length; i++){
        if(s[i] === '('){
          stack.push("(");
          maxCount = Math.max(maxCount, stack.length);
        } else if(s[i] === ')') {
           stack.pop();
        }
    }
    return maxCount;
};