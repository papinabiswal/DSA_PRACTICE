// - Use a result array filled with 0
// - For each update:
//     - +inc at start
//     - -inc at end + 1
// - Do prefix sum to apply changes
// - Return final array

// TC: O(n + m)
// SC: O(n)
function getModifiedArray(length, updates) {
    const result = new Array(length).fill(0);
  
    for (const [start, end, inc] of updates) {
      result[start] += inc;
      if (end + 1 < length) {
        result[end + 1] -= inc;
      }
    }
  
    // Apply prefix sum
    for (let i = 1; i < length; i++) {
      result[i] += result[i - 1];
    }
  
    return result;
  }

  let length = 5, 
updates = [
  [1, 3, 2],
  [2, 4, 3],
  [0, 2, -2]
]

  getModifiedArray(length, updates )
  