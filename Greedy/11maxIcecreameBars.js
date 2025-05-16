// 1. Sort costs array (buy cheapest first)
// 2. Initialize count = 0
// 3. Loop through costs:
//    - If cost > coins → break and return count
//    - Else → coins -= cost, count++
// 4. Return count

var maxIceCream = function(costs, coins) {
    costs.sort((a,b)=> a-b);

    let count =0;
    for(let i=0; i< costs.length; i++){
       if(costs[i] > coins){
         return count;
       } else {
           coins -=costs[i];
           count++;
       }
    }
    return count;
};