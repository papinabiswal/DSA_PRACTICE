var numWaterBottles = function(numBottles, numExchange) {
    let consumed = numBottles;
    let emptyBottle = numBottles;

    while(emptyBottle >= numExchange){
        extrafullBottle = Math.floor(emptyBottle / numExchange);
        remaining = emptyBottle % numExchange;

        consumed += extrafullBottle;
        emptyBottle = remaining + extrafullBottle;
    }
    return consumed;
};

// another approach
var numWaterBottles = function(numBottles, numExchange) {
    return numBottles + Math.floor((numBottles-1) / (numExchange-1));
};