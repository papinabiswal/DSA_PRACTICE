// - Use a set to track characters in the current partition
// - When a duplicate is found → increment count, reset set
// - Greedily make partitions when needed to ensure uniqueness

var partitionString = function(s) {
    let seen = new Set();
    let count =1;

    for(let char of s){
       if(seen.has(char)){
           count++;
           seen.clear();
       }
       seen.add(char);
    }
    return count;
};