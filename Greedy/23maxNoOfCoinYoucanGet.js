var maxCoins = function(piles) {
    piles.sort((a, b) => a - b); // Sort the array in ascending order

    let result = 0;
    let n = piles.length;
    
    let Bob = 0;
    let Me = n - 2;  // You start picking from second last
    // Alice = n - 1; // Not needed in the code logic

    while (Me > Bob) {
        result += piles[Me];  // You pick your coin
        Me -= 2;              // Move two places left
        Bob += 1;             // Bob picks the smallest each time
        // Alice -= 2;        // Just for understanding, not required
    }

    return result;
};

// optimise
var maxCoins = function(piles) {
    piles.sort((a, b) => a - b); // Sort the array in ascending order
   
   let n = piles.length;
   let result = 0;

   for (let i = Math.floor(n / 3); i < n; i += 2) {
       result += piles[i]; // You pick every second coin starting from n/3
   }

   return result;
};