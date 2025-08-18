// Bruteforce
var finalPrices = function(prices) {
    for(let i=0; i< prices.length; i++){
        for(let j=i+1; j< prices.length; j++){
              if(prices[i] >= prices[j]){
                   prices[i] -= prices[j];
                   break;
              }
        }
    }
    return prices;
};

// Next Smaller element To the left
// Next smaller element to the right
// Next Greate element to the left
// Next Greate element to the right
// similar problem using Monotonic stack
// TC : O(N) as monotonic stack
var finalPrices = function(prices) {
    let stack = [];
    let n = prices.length;

    for(let i=0; i< n; i++){
        while(stack.length && prices[i] <= prices[stack[stack.length-1]]){
            let idx = stack.pop();
            prices[idx] -=  prices[i];
        }
        stack.push(i);
    }
    return prices;
};