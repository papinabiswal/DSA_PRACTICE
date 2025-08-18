var clearDigits = function(s) {
    let stack = [];
    for(let c of s){
      if (!isNaN(c)) {
          if(stack.length) stack.pop();
      } else {
         stack.push(c);
      }
    }
    return stack.join('');
};

// O(1) space complexity
var clearDigits = function(s) {
    let result = "";
    for(let c of s){
      if (isNaN(c)) {
          result += c;
      } else {
         if(result.length > 0){
            result = result.slice(0, -1);
         }
      }
    }
    return result;
};