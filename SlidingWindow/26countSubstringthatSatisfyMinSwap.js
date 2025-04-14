var countKConstraintSubstrings = function(s, k) {
    let count =0, zeroCount =0, oneCount =0;
    let i=0, j=0;
    let n = s.length;

    while(j < n){
       if(s[j] === "0"){
         zeroCount++;
       } else {
          oneCount++;
       }

       while(zeroCount > k && oneCount > k) {
           if(s[i] === "0"){
              zeroCount--;
           } else {
              oneCount--;
           }
           i++;
       }
       count += j-i+1;
       j++;
    }
    return count;
};