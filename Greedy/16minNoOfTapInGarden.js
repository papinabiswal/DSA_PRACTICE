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
 