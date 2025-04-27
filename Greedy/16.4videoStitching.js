var videoStitching = function(clips, T) {
    const startEnd = new Array(T + 1).fill(0);
    
    for (let [start, end] of clips) {
        if (start <= T) {
            startEnd[start] = Math.max(startEnd[start], end);
        }
    }

    let currEnd = 0, maxEnd = 0, count = 0;
    
    for (let i = 0; i <= T; i++) {
        if (i > maxEnd) return -1; // can't reach this time
        
        if (i > currEnd) {
            count++;
            currEnd = maxEnd;
        }

        maxEnd = Math.max(maxEnd, startEnd[i]);
    }

    return count;
};