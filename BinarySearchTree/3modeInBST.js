// using extra space
// do the inorder traversal and store the values in a frequency map
// then find the max frequency and return the keys with that frequency

var findMode = function(root) {
    const freqMap = new Map();

    // In-order DFS to fill frequency map
    function inOrder(node){
       if(!node) return;
        inOrder(node.left);
        freqMap.set(node.val, (freqMap.get(node.val) || 0) + 1);
        inOrder(node.right);
    }
    inOrder(root);

    let result = [];
    let maxfreq = 0;
    for(let [val, count] of freqMap.entries()){
       if(count > maxfreq){
           maxfreq = count;
           result = [val];
       } else if(count === maxfreq){
           result.push(val);
       }
    }
    return result;
};


// 1. Traverse the BST in in-order (sorted values).
// 2. Count how many times each value appears.
// 3. Track the most frequent count.
// 4. If a value appears as many times as max, add to result.
// 5. Return the result array of modes.


var findMode = function(root) {
    let currNum = null;
    let currFreq = 0;
    let maxFreq = 0;
    let result = [];

    function inOrder(node){
       if(!node) return null;
       inOrder(node.left);

       if(node.val === currNum){
          currFreq++;
       } else {
          currNum = node.val;
          currFreq = 1;
       }

       if(currFreq > maxFreq){
          result.length = 0;
          result.push(node.val);
          maxFreq = currFreq;
       } else if(currFreq === maxFreq){
           result.push(node.val);
       }

       inOrder(node.right);
    }
    inOrder(root);
    return result;
};