function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {

        for (let j = 0; j < n - i - 1; j++) {

            if (arr[j] > arr[j + 1]) {
                // swap
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }

        }
    }

    return arr;
}

let nums = [5, 3, 8, 4, 2];
console.log(bubbleSort(nums));


// 5 > 3 → swap → [3,5,8,4,2]
// 5 < 8 → no swap
// 8 > 4 → swap → [3,5,4,8,2]
// 8 > 2 → swap → [3,5,4,2,8]


// 3 < 5
// 5 > 4 → swap → [3,4,5,2,8]
// 5 > 2 → swap → [3,4,2,5,8]

// 3 < 4
// 4 > 2 → swap → [3,2,4,5,8]

// 3 > 2 → swap → [2,3,4,5,8]

// optimised version with a flag to check if any swaps were made in the inner loop. If no swaps were made, the array is already sorted and we can break out of the loop early.
function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {

        let swapped = false;   // flag to check swaps

        for (let j = 0; j < n - i - 1; j++) {

            if (arr[j] > arr[j + 1]) {

                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;   // swap happened

            }
        }

        if (!swapped) break;   // stop if no swaps
    }

    return arr;
}