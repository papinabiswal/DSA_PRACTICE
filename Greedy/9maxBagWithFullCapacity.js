var maximumBags = function(capacity, rocks, additionalRocks) {
    // Step 1: Calculate how many rocks each bag needs to become full
    const spaceLeft = capacity.map((cap, i) => cap - rocks[i]);

    // Step 2: Sort the spaceLeft array so we fill the bags needing fewer rocks first
    spaceLeft.sort((a, b) => a - b);

    // Step 3: Try to fill as many bags as possible with additionalRocks
    let fullBags = 0;
    for (let i = 0; i < spaceLeft.length; i++) {
        if (spaceLeft[i] <= additionalRocks) {
            additionalRocks -= spaceLeft[i];  // Use up the rocks
            fullBags++;                       // One more bag is full
        } else {
            break; // No more bags can be filled fully
        }
    }

    return fullBags;
};

// 🧪 Example:
console.log(maximumBags([2, 3, 4, 5], [1, 2, 4, 2], 2)); // Output: 3
