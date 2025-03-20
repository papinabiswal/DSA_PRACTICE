var uniquePathsIII = function(grid) {
    let m = grid.length;
    let n = grid[0].length;  

    let uniquePaths = 0;

    function backtrack(i, j, count){
        if(i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === -1){
            return;
        } 

        if(i === end_x && j === end_y){
            if(count === 0){
                uniquePaths++;
            }
            return;
        }

        let temp = grid[i][j];
        grid[i][j] = -1; // Mark as visited

        backtrack(i + 1, j, count - 1);
        backtrack(i - 1, j, count - 1);
        backtrack(i, j + 1, count - 1);
        backtrack(i, j - 1, count - 1);

        grid[i][j] = temp;
    }

    let start_x, start_y, end_x, end_y, emptyCount =0;

    for(let i=0; i< m; i++){
       for(let j=0; j< n; j++){
           if(grid[i][j] === 1){
             start_x = i;
             start_y = j;
           }
           if(grid[i][j] === 2){
              end_x = i;
              end_y = j;
           }
           if(grid[i][j] === 0){
              emptyCount++;
           }
       }
    }
    backtrack(start_x, start_y, emptyCount + 1);
    return uniquePaths;
};
uniquePathsIII([[1,0,0,0],[0,0,0,0],[0,0,2,-1]]);