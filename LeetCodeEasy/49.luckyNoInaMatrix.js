// find min in all row
// find max in all column
// which number is common that is the answer
var luckyNumbers = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    let rowMin = []
    for(let row = 0; row < m; row++){
        let rMin = Infinity;
         for(let col = 0; col < n; col++){
            rMin = Math.min(rMin, matrix[row][col])
         }
         rowMin.push(rMin);
    }

    let colMax = [];
    for(let col=0; col< n; col++){
       let cMax = -Infinity;
       for(let row = 0; row < m; row++){
          cMax = Math.max(cMax, matrix[row][col]);
       }
       colMax.push(cMax);
    }

    let result = [];
    for(let row = 0; row < m; row++){
       for(let col = 0; col < n; col++){
          if(matrix[row][col] === rowMin[row] && matrix[row][col] === colMax[col]){
              result.push(matrix[row][col]);
          }
       }
    }
    return result;
};