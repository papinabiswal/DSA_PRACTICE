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