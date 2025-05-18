// - Step 1: Left to right pass, compare with left neighbor.
// - Step 2: Right to left pass, compare with right neighbor.
// - Step 3: Take max of both arrays at each index for the final count.

var candy = function(ratings) {
    const n = ratings.length;

    const L2R = new Array(n).fill(1); // Left to Right
    const R2L = new Array(n).fill(1); // Right to Left

    // Step 1: Compare with left neighbor
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            L2R[i] = L2R[i - 1] + 1;
        }
    }

    // Step 2: Compare with right neighbor
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            R2L[i] = R2L[i + 1] + 1;
        }
    }

    // Step 3: Take the max from both directions
    let result = 0;
    for (let i = 0; i < n; i++) {
        result += Math.max(L2R[i], R2L[i]);
    }

    return result;
};

// O(n) space
var candy = function(ratings) {
    const n = ratings.length;
    const count = new Array(n).fill(1);

    // First pass: left to right (compare with left neighbor)
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            count[i] = count[i - 1] + 1;
        }
    }

    // Second pass: right to left (compare with right neighbor)
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            count[i] = Math.max(count[i], count[i + 1] + 1);
        }
    }

    // Return total candies
    return count.reduce((sum, val) => sum + val, 0);
};

// O(1) space
// - Start by giving each child 1 candy
// - Traverse ratings:
//   - Skip equal ratings
//   - Count increasing slope (add candies)
//   - Count decreasing slope (add candies)
//   - Subtract min(peak, valley) to avoid double counting
// - Return total candies
var candy = function(ratings) {
    const n = ratings.length;

    let candies = n; // Each child gets at least one candy
     let i = 1;

     while (i < n) {
        if (ratings[i] === ratings[i - 1]) {
            i++;
            continue;
        }

        // For increasing slope
        let peak = 0;
        while (i < n && ratings[i] > ratings[i - 1]) {
            peak++;
            candies += peak;
            i++;
        }
        let valley = 0;
        while (i < n && ratings[i] < ratings[i - 1]) {
            valley++;
            candies += valley;
            i++;
        }
       // Remove the smaller side count to avoid double counting the peak
        candies -= Math.min(peak, valley);
     }
     return candies;
};