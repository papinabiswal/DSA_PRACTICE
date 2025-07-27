// find the smallest two element and add them.
// subract from money if negative return money else sutract value.

var buyChoco = function(prices, money) {
    let small=secondSmall = Infinity;
    for(let i= 0; i< prices.length; i++){
        if(prices[i] < small){
           secondSmall = small;
           small = prices[i];
       } else {
           secondSmall = Math.min(secondSmall, prices[i]); 
       }
    }

    return (secondSmall + small) <= money ? (money - (secondSmall + small)) : money;
};