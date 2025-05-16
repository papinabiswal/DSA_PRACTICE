// 1. Check if total gas < total cost → return -1
// 2. Initialize total = 0, result = 0
// 3. Loop from i = 0 to n:
//    - total += gas[i] - cost[i]
//    - If total < 0 → reset total = 0 and result = i + 1
// 4. Return result


function canCompleteCircuit(gas, cost) {
    const n = gas.length;

    const sumGas = gas.reduce((a, b) => a + b, 0);
    const sumCost = cost.reduce((a, b) => a + b, 0);

    if (sumGas < sumCost) return -1;

    let total = 0;
    let result = 0;

    for (let i = 0; i < n; i++) {
        total += gas[i] - cost[i];

        if (total < 0) {
            total = 0;
            result = i + 1;
        }
    }

    return result;
}
