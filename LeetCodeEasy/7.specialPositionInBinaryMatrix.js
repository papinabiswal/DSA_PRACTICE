var numSpecial = function(mat) {
    let  m = mat.length;
    let n = mat[0].length;

    const rowCount = new Array(m).fill(0);
    const colCount = new Array(n).fill(0);

    for(let i=0; i< m; i++){
       for(let j=0; j< n; j++){
           if(mat[i][j] === 1){
               rowCount[i]++;
               colCount[j]++;
           }
       }
    }

    let result =0;

    for(let i=0; i< m; i++){
        for(let j=0; j<n; j++){
            if(mat[i][j] === 1 && rowCount[i] === 1 && colCount[j] === 1){
                result++;
            }
        }
    }
    return result;
};