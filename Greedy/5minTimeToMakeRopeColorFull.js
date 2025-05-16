// minCost (Greedy)
// - If two adjacent balloons have the same color:
//     - Remove the one with lower removal time
// - Keep the balloon with highest `neededTime` in current group
// - Reset `prevMax` when color changes
// - Add up all removal costs to `time`

var minCost = function(colors, neededTime) {
    const n = colors.length;
    let time = 0;
    let prevMax = 0;

    for (let i = 0; i < n; i++) {
        if (i > 0 && colors[i] !== colors[i - 1]) {
            prevMax = 0;
        }

        const curr = neededTime[i];
        time += Math.min(prevMax, curr); // Greedily remove the one with lower time
        prevMax = Math.max(prevMax, curr);
    }

    return time;
};