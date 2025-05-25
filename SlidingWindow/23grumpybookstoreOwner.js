// 1. Count base happiness where grumpy = 0.
// 2. Sliding window of size `minutes` to find max customers to recover (grumpy = 1).
// 3. Add both to get the final answer.

var maxSatisfied = function(customers, grumpy, minutes) {
    let n = customers.length;
    let baseHappy = 0;
    for(let i=0; i< n; i++){
      if(grumpy[i] === 0){
         baseHappy += customers[i];
      }
    }

    let extra=0;
    let maxExtra =0;

    for(let i=0; i< n; i++){
       if(grumpy[i] === 1){
          extra += customers[i];
       }
       if(i >= minutes){
          if(grumpy[i-minutes] === 1){
             extra -= customers[i-minutes]
          }
       }
       maxExtra = Math.max(maxExtra, extra);
    }
    return maxExtra + baseHappy;
};