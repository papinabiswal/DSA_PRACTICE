var insert = function(intervals, newInterval) {
    intervals.push(newInterval);
    intervals.sort((a, b) => a[0] - b[0]);

    let res = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        let [currStart, currEnd] = intervals[i];
        let resEnd = res[res.length-1][1];
        if (currStart > resEnd) {
            res.push(intervals[i]);
        } else {
            res[res.length-1][1] = Math.max(currEnd, resEnd) 
        }
    }

    return res;    
};


// if input is sorted
// TC: O(n)
// SC: O(n)

var insert = function(intervals, newInterval) {
    let result = [];
    let i = 0;
    
    // Add all intervals that end before newInterval starts
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }
    
    // Merge overlapping intervals
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    result.push(newInterval);
    
    // Add remaining intervals
    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }
    
    return result;
};