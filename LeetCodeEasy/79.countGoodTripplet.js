var countGoodTriplets = function(arr, a, b, c) {
    let n = arr.length;
    let count = 0;

    for (let i = 0; i <= n - 3; i++) {
        for (let j = i + 1; j <= n - 2; j++) {
            if (Math.abs(arr[i] - arr[j]) <= a) {
                for (let k = j + 1; k <= n - 1; k++) {
                    if (Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
                        count++;
                    }
                }
            }
        }
    }

    return count;
};