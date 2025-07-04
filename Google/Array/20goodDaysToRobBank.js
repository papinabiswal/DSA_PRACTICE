var goodDaysToRobBank = function(security, time) {
    const n = security.length;
    const result = [];

    if (time === 0) {
        // All days are good if time = 0
        for (let i = 0; i < n; i++) result.push(i);
        return result;
    }

    const nonInc = new Array(n).fill(0);
    const nonDec = new Array(n).fill(0);

    // Fill non-increasing prefix count
    for (let i = 1; i < n; i++) {
        if (security[i] <= security[i - 1]) {
            nonInc[i] = nonInc[i - 1] + 1;
        }
    }

    // Fill non-decreasing suffix count
    for (let i = n - 2; i >= 0; i--) {
        if (security[i] <= security[i + 1]) {
            nonDec[i] = nonDec[i + 1] + 1;
        }
    }

    // Check for good days
    for (let i = time; i < n - time; i++) {
        if (nonInc[i] >= time && nonDec[i] >= time) {
            result.push(i);
        }
    }

    return result;
};