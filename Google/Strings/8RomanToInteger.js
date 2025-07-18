var romanToInt = function(s) {
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        let currVal = map[s[i]];
        let nextVal = map[s[i + 1]];

        // If next value is greater, subtract current
        if (nextVal > currVal) {
            total -= currVal;
        } else {
            total += currVal;
        }
    }

    return total;
};
