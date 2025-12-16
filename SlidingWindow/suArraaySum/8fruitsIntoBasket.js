function totalFruit(fruits) {
    let left = 0;
    let right = 0;
    let map = new Map();
    let maxLen = 0;

    while (right < fruits.length) {
        let fruit = fruits[right];
        map.set(fruit, (map.get(fruit) || 0) + 1);

        // shrink the window if more than 2 types
        while (map.size > 2) {
            let leftFruit = fruits[left];
            map.set(leftFruit, map.get(leftFruit) - 1);
            if (map.get(leftFruit) === 0) {
                map.delete(leftFruit);
            }
            left++;
        }

        // update answer
        maxLen = Math.max(maxLen, right - left + 1);
        right++;
    }

    return maxLen;
}

// Example usage:
const fruits = [1, 2, 1, 2, 3];
console.log(totalFruit(fruits));  // Output: 4
