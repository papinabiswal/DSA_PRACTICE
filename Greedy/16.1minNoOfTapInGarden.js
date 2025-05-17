// - Build an array `startEnd[]` where startEnd[i] = farthest point any tap can reach starting at i.
// - Traverse from i = 0 to n:
//     - Track `currEnd`: current watered range
//     - Track `maxEnd`: farthest point we can reach from current window
//     - If i > maxEnd → impossible → return -1
//     - If i > currEnd → open a new tap, update currEnd = maxEnd
// - Return number of taps opened

var minTaps = function(n, ranges) {
    let startEnd = new Array(n + 1).fill(0);
 
    for (let i = 0; i < ranges.length; i++) {
       let start = Math.max(0, i - ranges[i]);
       let end = Math.min(n, i + ranges[i]);
 
       startEnd[start] = Math.max(startEnd[start], end);
    } 
 
    let taps = 0;
    let currEnd = 0;
    let maxEnd = 0;
 
    for (let i = 0; i <= n; i++) {
        if (i > maxEnd) return -1;
 
        if (i > currEnd) {
            taps++;
            currEnd = maxEnd;
        }
 
        maxEnd = Math.max(maxEnd, startEnd[i]);
    }
 
    return taps;
 };
 