var largestLocal = function(grid) {
    let n = grid.length;
    let result = new Array(n-2).fill(0).map(()=> new Array(n-2).fill(0));
    for(let i= 0; i< n-2; i++){
        for(let j=0; j< n-2; j++){
            result[i][j] = findMax(grid, i, j);
        } 
    }
    return result;
};

function findMax(grid, x, y){
    let maxElem = -Infinity;
    for(let i = x; i<= x+2; i++){
       for(let j=y; j<= y+2; j++){
           maxElem = Math.max(maxElem, grid[i][j]);
       }
    }
    return maxElem;
}