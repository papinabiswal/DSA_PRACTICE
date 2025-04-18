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