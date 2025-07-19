// O(m * n)
var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;

    let i = 0, j = n-1;
    while(i < m && j >= 0){
       if(matrix[i][j] > target){
           j--;
       } else if(matrix[i][j] < target){
           i++;
       } else {
         return true;
       }
    }
    return false;
};


// O(log(m * n))
// Each row is sorted, and the first number of each row is bigger than the last number of the previous row. So you can imagine it like one big sorted list:
// [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
// Then you convert the index back to a row and column:

// 📌 row = Math.floor(mid / n)

// 📌 col = mid % n
var searchMatrix = function(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;

    let start = 0;
    let end = m * n - 1;

    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2);

        const row = Math.floor(mid / n);
        const col = mid % n;

        const midValue = matrix[row][col];

        if (midValue === target) {
            return true;
        } else if (midValue < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return false;
};