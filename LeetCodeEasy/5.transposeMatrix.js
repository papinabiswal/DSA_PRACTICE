// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[1,4,7],[2,5,8],[3,6,9]]
// transpose matrix means row to column and column to row
// m*n matrix to n*m matrix
var transpose = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    let result = new Array(n).fill(0).map(()=> Array(m).fill(0));

    for(let i=0; i< m; i++){
        for(let j=0; j< n; j++){
             result[j][i] = matrix[i][j];
        }
    }
    return result;
};