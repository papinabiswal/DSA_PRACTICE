var construct2DArray = function(original, m, n) {
    if(original.length !== m*n) return [];
    let result = new Array(m).fill(0).map(()=> new Array(n).fill(0));
    let idx = 0;
    for(let i=0; i<m; i++){
       for(let j=0; j< n; j++){
            result[i][j] = original[idx];
            idx++;
       }
    }
    return result;
};


// easiest way
// how to find row and column value from 1D to 2D
var construct2DArray = function(original, m, n) {
    if (original.length !== m * n) return [];
    let result = new Array(m).fill(0).map(()=> new Array(n).fill(0));
    for(let i=0; i< original.length; i++){
        let row = Math.floor(i / n);
        let col = i%n;
       result[row][col] = original[i];
    }
    return result;
};