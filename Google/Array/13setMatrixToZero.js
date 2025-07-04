var setZeroes = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    // Deep copy of the original matrix
    const temp = matrix.map(row => [...row]);

    // Mark rows and columns in temp based on zeroes in original matrix
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                for (let k = 0; k < n; k++) {
                    temp[i][k] = 0; // set entire row to 0
                }
                for (let k = 0; k < m; k++) {
                    temp[k][j] = 0; // set entire column to 0
                }
            }
        }
    }

    // Copy temp back into matrix
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = temp[i][j];
        }
    }

    return matrix;
};


// optimal
// TC: O(M*N)
// SC: O(1)

var setZeroes = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    let firstColZero = false;
    let firstRowZero = false;

    // check if first col has any zero
    for(let i=0; i< m; i++){
        if(matrix[i][0] === 0){
            firstColZero = true;
            break;
        }
    }

    // check if first row has any zero
       for(let i=0; i< n; i++){
          if(matrix[0][i] === 0){
            firstRowZero = true;
            break;
          }
       }

       // use first row and first col to make zero pos
       for(let i=1; i< m; i++){
           for(let j=1; j< n; j++){
               if(matrix[i][j] === 0){
                   matrix[i][0] = 0;
                   matrix[0][j] = 0;
               }
           }
       }

       for(let i=1; i< m; i++){
           for(let j=1; j< n; j++){
               if(matrix[i][0] === 0 || matrix[0][j] === 0){
                   matrix[i][j] = 0;
               }
           }
       }

       if(firstRowZero){
          for(let j=0; j< n; j++){
              matrix[0][j] = 0;
          }
       }  

       if(firstColZero){
          for(let i=0; i< m; i++){
              matrix[i][0] = 0;
          }
       }

       return matrix; 
};