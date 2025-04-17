function numberOfAlternatingGroups(colors, k) {
    const n = colors.length;
    const N = n + (k - 1);

    // Extend the array to simulate circular behavior
    for (let i = 0; i < k - 1; i++) {
        colors.push(colors[i]);
    }

    let result = 0;
    let i = 0;
    let j = 1;

    while (j < N) {
        if (colors[j] === colors[j - 1]) {
            i = j;
            j++;
            continue;
        }

        if (j - i + 1 === k) {
            result++;
            i++;
        }

        j++;
    }

    return result;
}


// alternate
var numberOfAlternatingGroups = function(colors, k) {
    const n = colors.length;
    let count = 0;

    // Helper to check if a group is alternating
    const isAlternating = (start) => {
        for (let i = 0; i < k - 1; i++) {
            const curr = colors[(start + i) % n];
            const next = colors[(start + i + 1) % n];
            if (curr === next) return false;
        }
        return true;
    };

    // Try every possible starting index
    for (let i = 0; i < n; i++) {
        if (isAlternating(i)) count++;
    }

    return count;
};