var jobScheduling = function(startTime, endTime, profit) {
    const n = startTime.length;
    const jobs = [];

    for (let i = 0; i < n; i++) {
        jobs.push({ start: startTime[i], end: endTime[i], profit: profit[i] });
    }

    // Sort jobs by start time
    jobs.sort((a, b) => a.start - b.start);

    function findNextIndex(currentEnd, startIdx) {
        for (let i = startIdx; i < n; i++) {
            if (jobs[i].start >= currentEnd) return i;
        }
        return n;
    }

    function dfs(i) {
        if (i === n) return 0;

        // Option 1: Skip job i
        let skip = dfs(i + 1);

        // Option 2: Take job i
        let next = findNextIndex(jobs[i].end, i + 1);
        let take = jobs[i].profit + dfs(next);

        return Math.max(skip, take);
    }

    return dfs(0);
};
