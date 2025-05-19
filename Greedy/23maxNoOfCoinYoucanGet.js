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

// - Sort the piles.
// - Divide piles into groups of 3 (largest, your pick, smallest).
// - Skip the smallest third (for the third player).
// - Pick every second coin from the rest.
// - Add them up and return.

var maxCoins = function(piles) {
    piles.sort((a, b) => a - b); // Sort the array in ascending order
   
   let n = piles.length;
   let result = 0;

   for (let i = Math.floor(n / 3); i < n; i += 2) {
       result += piles[i]; // You pick every second coin starting from n/3
   }

   return result;
};
maxCoins([1,2,3,4,5,6,7,8,9])