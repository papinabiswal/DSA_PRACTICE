var partition = function(s) {
    let n = s.length;
    let t = new Array(n).fill(null).map(()=> new Array(n).fill(false));

    for(let L =1; L<=n; L++){
      for(let i=0; i+L-1 < n; i++){
          let j = i+L-1;
          if(i === j){
             t[i][j] = true;
          } else if(i+1 === j){
              t[i][j] = (s[i] === s[j])
          } else {
             t[i][j] = (s[i] === s[j] && t[i+1][j-1])
          }
      }
    }

    let result =[];
    let currPartition = [];
    function solve(i){
       if(i === n){
          result.push([...currPartition])
          return;
       }
       for(let j=i; j< n; j++){
          if(t[i][j]){
              currPartition.push(s.substring(i, j+1));
              solve(j+1);
              currPartition.pop();
          }
       }
    }
     solve(0);
     return result;
};
