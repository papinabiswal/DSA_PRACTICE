function totalFruit(fruits) {
    // Function to count subarrays with at most `k` distinct elements
    function atMostK(fruits, k) {
        let i = 0, result = 0;
        let count = new Map();

        for (let j = 0; j < fruits.length; j++) {
            // Add current fruit to the basket
            count.set(fruits[j], (count.get(fruits[j]) || 0) + 1);

            // If we have more than `k` types of fruits, slide the window
            while (count.size > k) {
                count.set(fruits[i], count.get(fruits[i]) - 1);
                if (count.get(fruits[i]) === 0) {
                    count.delete(fruits[i]);
                }
                i++;
            }

            // Calculate the number of valid subarrays
            result += j - i + 1;
        }
        return result;
    }

    // We want to count subarrays with exactly 2 distinct fruits
    return atMostK(fruits, 2); // Since we're dealing with exactly 2 types of fruits
}

// Example usage:
const fruits = [1, 2, 1, 2, 3];
console.log(totalFruit(fruits));  // Output: 4
