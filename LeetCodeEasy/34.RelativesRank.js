var findRelativeRanks = function(score) {
      const n = score.length;

      const indexedStore = score.map((val,idx)=> [val, idx]);
      indexedStore.sort((a,b)=> b[0] - a[0]);
      const result = Array(n);

      for(let i=0; i< n; i++){
         let idx = indexedStore[i][1];
         if(i === 0) result[idx]= "Gold Medal";
         else if(i === 1) result[idx] = "Silver Medal";
         else if(i === 2) result[idx] = "Bronze Medal";
         else result[idx] = (i+1).toString();
      }
      return result;
};