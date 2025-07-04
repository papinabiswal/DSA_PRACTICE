var spiralOrder = function(matrix) {
    if(matrix.length === 0) return [];

    const m = matrix.length;
    const n = matrix[0].length;

    let result =[];

    let top =0;
    let bottom = m-1;
    let left =0;
    let right = n-1;

    let direction =0;

    // 0-> left to right
    // 1-> top to bottom;
    // 2 -> right to left;
    // 3 -> bottom to top;

    while(top <= bottom && left <= right){
        if(direction === 0){
            // left -> right
            for(let i=left; i<= right; i++){
                result.push(matrix[top][i])
            }
            top++;
        } else if(direction === 1){
             // top -> bottom
             for(let i=top; i <= bottom; i++){
                 result.push(matrix[i][right]);
             }
             right--;
        } else if(direction === 2){
             // right -> left
             for(let i=right; i >= left; i--){
                 result.push(matrix[bottom][i]);
             }
             bottom--;
        } else if(direction === 3){
             // bottom -> top
             for(let i=bottom; i >= top; i--){
                 result.push(matrix[i][left]);
             }
             left++;
        }
        direction = (direction+1) % 4;
    } 
    return result;
};