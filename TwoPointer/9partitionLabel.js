var partitionLabels = function(s) {
    let n = s.length;
    let result =[];

    let lastOccurrence = {};
    for(let i=0; i< n; i++){
        lastOccurrence[s[i]] =i;
    }

    let start =0, end = 0;

    for(let i=0; i< n; i++){
       end = Math.max(end, lastOccurrence[s[i]]);
       if(i === end){
          result.push(end-start+1);
          start=i+1;
       }
    }
    return result;
};