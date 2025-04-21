// Hashmap approach
// TC:O(n+b)
// SC:O(b)
var maxCount = function(banned, n, maxSum) {
    let mp = new Map();
    for(let i of banned){
        mp.set(i, 1);
    }

    let sum=0, res =0;
    for(let i=1; i <= n; i++){
        if(!mp.has(i)){
            sum += i;

            if(sum <= maxSum){
                res++;
            } 
        }
    }
    return res;
};

// binary search
// TC: O(b⋅log(b)+n⋅log(b))
// SC: O(1)
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return true;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return false;
}
var maxCount = function(banned, n, maxSum) {
   banned.sort((a, b) => a - b);
    let total = 0, res = 0;
    for (let i = 1; i <= n; i++) {
        if (!binarySearch(banned, i)) {
            total += i;
            if (total <= maxSum) res++;
            else break;
        }
    }
    return res;
};